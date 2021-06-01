package philoarte.jaemin.api.review.domain.dto;

import lombok.*;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
import philoarte.jaemin.api.art.domain.Art;
import philoarte.jaemin.api.artist.domain.Artist;
import philoarte.jaemin.api.common.util.ModelMapperUtils;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ReviewDto {


    private Long reviewId;

    private String title;
    private String content;

    private Long writerId; // 작성자 아이디
    private String writerName; // 작성자 이름
//    private Long artId;
    private int replyCount;
    private int reviewCount;

    private LocalDateTime regDate;
    private LocalDateTime modDate;



//    private Art art;
//
//    private Artist artist;

    @Builder.Default
    private ArrayList<MultipartFile> files = new ArrayList<>();

    @Builder.Default
    private List<ReviewFileDto> reviewFileDtoList = new ArrayList<>();

    public void addReviewFileDto(ReviewFileDto reviewFileDto){
        reviewFileDtoList.add(reviewFileDto);
    }

}
