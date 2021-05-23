package philoarte.jaemin.api.review.domain.dto;

import lombok.*;
import org.springframework.stereotype.Component;
import philoarte.jaemin.api.artist.domain.Artist;
import philoarte.jaemin.api.review.domain.Review;

import javax.persistence.*;
import java.time.LocalDateTime;

@Component
@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ReplyDto {

    private Long rno;

    private String text;
    private String replyer;

    private Long reviewId;

    private LocalDateTime regDate, modDate;

//    //댓글 파일 업로드
//    private String uuid;
//    private String fileTitle;
//    private String fileDetail;
//    private String fname;
//    private Boolean repImg;

    private Review review;



}
