package philoarte.jaemin.api.review.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import net.coobird.thumbnailator.Thumbnails;
import net.coobird.thumbnailator.geometry.Positions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import philoarte.jaemin.api.review.domain.dto.ReviewFileDto;
import philoarte.jaemin.api.review.repository.ReviewFileRepository;

import javax.imageio.ImageIO;
import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Log4j2
@Service
@RequiredArgsConstructor
public class ReviewFileServiceImpl implements ReviewFileService{

    private final ReviewFileRepository repository;

    @Value("${philo.arte.upload.path}")
    private String uploadPath;

    @Transactional
    @Override
    public ArrayList<ReviewFileDto> saveFile(List<MultipartFile> uploadFiles) {
        ArrayList<ReviewFileDto> resultDtoList = new ArrayList<>();
        for(MultipartFile uploadFile : uploadFiles){
            String ofname = uploadFile.getOriginalFilename();
            int idx = ofname.lastIndexOf(".");
            String ofheader = ofname.substring(0, idx);
            String ext = ofname.substring(idx);
            String uuid = UUID.randomUUID().toString();
            StringBuilder sb = new StringBuilder();
            sb.append(uploadPath).append(File.separator).append(ofheader).append("_").append(uuid).append(ext);
            String saveName = sb.toString();
            log.info("Review File Upload Name : " + saveName);
            Path savePath = Paths.get(saveName);
            try{
                uploadFile.transferTo(savePath);
                String thumbnailSaveName = uploadPath + File.separator+ "s_" + uuid + ofname;
                Thumbnails.of(new File(saveName)).size(100, 100).outputFormat("jpg").toFile(thumbnailSaveName);
                Thumbnails.of(new File(saveName)).scale(1)
                        .watermark(Positions.BOTTOM_CENTER, ImageIO.read(new File(uploadPath + File.separator + "84560_320.jpg")), 0.5f)
                        .toFile(new File(uploadPath + File.separator + "w_" +uuid +ofname));
                ReviewFileDto reviewFileDto = ReviewFileDto.builder().uuid(uuid).fname(saveName).build();
                resultDtoList.add(reviewFileDto);
            } catch (Exception e) {
                e.printStackTrace();
            }

        }
        return resultDtoList;
    }

    @Override
    public void reviewFileDelete(Long reviewFileId) {
        repository.reviewFileDelete(reviewFileId);
    }


}
