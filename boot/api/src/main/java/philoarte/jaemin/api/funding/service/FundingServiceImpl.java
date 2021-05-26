package philoarte.jaemin.api.funding.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.function.Function;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import net.coobird.thumbnailator.Thumbnails;
import philoarte.jaemin.api.funding.domain.*;
import philoarte.jaemin.api.funding.repository.FundingFileRepository;
import philoarte.jaemin.api.funding.repository.FundingRepository;

@Service
@Log4j2
@RequiredArgsConstructor
public class FundingServiceImpl implements FundingService{

    private final FundingRepository repository;
    private final FundingFileRepository frepo;

    @Transactional
    @Override
    public String totalSave(FundingDto dto) {
        Funding totalPost = Funding.of(dto);
        totalPost.saveRequest(dto);
        ArrayList<FundingFileDto> files =  dto.getFundingFiles();
        if(!files.isEmpty()){
            files.forEach(fundingFiledtos -> {
                FundingFile f = dtoToEntityResumeFile(fundingFiledtos);
                f.confirmFunding(totalPost);
                frepo.save(f);
             });
        }
        return (repository.save(totalPost)!= null) ? "success" : "Fail";
    }


    @Override
    public String delete(FundingDto postDto) {
        repository.delete(Funding.of(postDto));
        return (repository.findById(Funding.of(postDto).getFundingId()) == null)
                 ? "Delete Success" : "Delete Failed";
    }

    @Override
    public void deleteById(long id) {
        repository.deleteById(id);
    }

    @Override
    @Transactional
    public String save(FundingDto requestDto) {
        Funding toEntityRequest = Funding.of(requestDto);
        toEntityRequest.saveRequest(requestDto);
        ArrayList<FundingFileDto> files =  requestDto.getFundingFiles();
        if(!files.isEmpty()){
            files.forEach(fundingFiledtos -> {
                FundingFile f = dtoToEntityResumeFile(fundingFiledtos);
                frepo.save(f);
             });
        }
        return (repository.save(toEntityRequest)!= null) ? "success" : "Fail"; 
    }

    @Transactional
    @Override
    public List<Funding> getAllFundings() {
        return repository.getAllFundings();
    }

    @Override
    public FundingDto getFundingById(long id) {
        Funding funding = repository.findById(id).orElseThrow(IllegalArgumentException::new);
        FundingDto dto = FundingDto.toDto(funding);
        return dto;
    }

    @Value("${shop.legossol.upload.path}")
    private String uploadPath;

    @Transactional
    @Override
    public ArrayList<FundingFileDto> registerFile(List<MultipartFile> uploadFiles) {
        ArrayList<FundingFileDto> resultDtoList = new ArrayList<>();
        for (MultipartFile uploadFile : uploadFiles) {

            String ofname = uploadFile.getOriginalFilename();

            int idx = ofname.lastIndexOf(".");
            String ofheader = ofname.substring(0, idx);
            String ext = ofname.substring(idx);
            String uuid = UUID.randomUUID().toString();
            StringBuilder sb = new StringBuilder();

            sb.append(uploadPath).append(File.separator).append(uuid).append("_").append(ofheader).append(ext);
            String saveName = sb.toString();
            log.info("file upload name : " + saveName);
            Path savePath = Paths.get(saveName);
            try {
                uploadFile.transferTo(savePath);
                String thumbnailSaveName = uploadPath + "s_" + uuid + ofname;
                Thumbnails.of(new File(saveName)).size(100, 100).outputFormat("jpg").toFile(thumbnailSaveName);
                FundingFileDto fundingFileDto = FundingFileDto.builder().uuid(uuid).fname(saveName).build();
                resultDtoList.add(fundingFileDto);
            }
            catch (IOException e) {
                e.printStackTrace();
            }
        }
        return resultDtoList;
    }

    @Override
    public List<FundingFileDto> getFileByFundingId(Long id) {
        return FundingFileDto.filetoDto(frepo.getFileByFundingId(id));
    }

    @Override
    public String deleteFile(Long fundingFileId) {
        repository.deleteById(fundingFileId);
        return (frepo.findById(fundingFileId) != null) ? "Delete Success" : "Delete Failed";
    }

    @Override
    public FundingPageDto<FundingDto, Funding> getList(PageRequestDto requestDto) {
            Pageable pageable = requestDto.getPageable(Sort.by("fundingId").descending());
            Page<Funding> result = repository.findAll(pageable);
            Function<Funding, FundingDto> fn = (entity -> pageentityToDto(entity));
        return new FundingPageDto<>(result,fn);
    }
    @Override
    public FundingPageDto<FundingDto, Funding> getPageById(PageRequestDto requestDto, Long id) {
        return new FundingPageDto<>(repository.getPageById(
            requestDto.getPageable(Sort.by("fundingId").descending()), id),
            entity  -> pageentityToDto(entity));
    }

    public FundingPageDto<FundingDto, Funding> getPageByArtistId(PageRequestDto requestDto, Long id) {
        
        return new FundingPageDto<>(repository.getPagebyArtistId(
            requestDto.getPageable(Sort.by("fundingId").descending()), id),
            (entity -> pageentityToDto(entity)));
    }

    @Override
    public FundingPageDto<FundingDto, Funding> searchTitleAndContent(PageRequestDto requestDto, String keyword) {
        
        return new FundingPageDto<>(repository.searchIndex(
                requestDto.getPageable(Sort.by("fundingId").descending()), keyword, keyword),
                entity -> pageentityToDto(entity));
    }

    @Override
    public FundingPageDto<FundingDto, Funding> getByartistName(PageRequestDto requestDto, String name) {
        return new FundingPageDto<>(repository.getPageByartistName(
            requestDto.getPageable(Sort.by("fundingId").descending()), name),
            entity -> pageentityToDto(entity));
    }

   


}
