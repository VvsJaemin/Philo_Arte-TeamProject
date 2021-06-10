package philoarte.jaemin.api.funding.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.web.multipart.MultipartFile;


import philoarte.jaemin.api.funding.domain.*;

public interface FundingService {
    String save(FundingDto requestDto);
    List<Funding> getAllFundings();
    default Funding dtoToEntity(FundingDto dto){
        Funding funding = Funding.builder()
                        .fundingId(dto.getFundingId())
                        .title(dto.getTitle())
                        .content(dto.getContent())
                        .goalPrice(dto.getGoalPrice())
                        .hashtag(dto.getHashtag())
                        .build();
                        return funding;
    }

    FundingDto getFundingById(long id);

    String delete(FundingDto postDto);
    void deleteById(long id);
    //============fileservice below==============
    String totalSave(FundingDto dto);


    List<FundingFileDto> getFileByFundingId(Long id);

    default FundingFile dtoToEntityResumeFile(FundingFileDto dto) {

        FundingFile fundingFile = FundingFile.builder().uuid(dto.getUuid()).fname(dto.getFname())
                .build();
        return fundingFile;
    }

    ArrayList<FundingFileDto> registerFile(List<MultipartFile> uploadFiles);

    String deleteFile(Long fundingFileId);

    //============Pagingservice Below==============
    FundingPageDto<FundingDto, Funding> getList(PageRequestDto requestDto);
    FundingPageDto<FundingDto, Funding> getPageById(PageRequestDto requestDto,Long id);
    FundingPageDto<FundingDto, Funding> getPageByArtistId(PageRequestDto requestDto,Long id);
    FundingPageDto<FundingDto, Funding> searchTitleAndContent(PageRequestDto requestDto, String keyword);
   
    FundingPageDto<FundingDto, Funding> getByartistName(PageRequestDto requestDto, String name);
    default Funding pagedtoToEntity(FundingDto dto){
        Funding entity = Funding.builder()
                .fundingId(dto.getFundingId())
                .title(dto.getTitle())
                .content(dto.getContent())
                .goalPrice(dto.getGoalPrice())
                .hashtag(dto.getHashtag())
                .build();
                return entity;
    }
    default FundingDto pageentityToDto(Funding entity){
        FundingDto dto = FundingDto.builder()
                    .fundingId(entity.getFundingId())
                    .title(entity.getTitle())
                    .content(entity.getContent())
                    .goalPrice(entity.getGoalPrice())
                    .hashtag(entity.getHashtag())
                    .build();
                    return dto;
    }
}
