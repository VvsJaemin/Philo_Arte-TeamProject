package philoarte.jaemin.api.review.domain.dto;

import lombok.*;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
import philoarte.jaemin.api.artist.domain.Artist;
import philoarte.jaemin.api.review.domain.Review;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;

@Component
@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
public class ReplyDto {

    private Long rno;

    private String text;
    private String replyer;

    private Long reviewId;

    private LocalDateTime regDate;
    private LocalDateTime modDate;

    //댓글 파일 업로드
    private String uuid;
    private String imgName;
    private String path;

//    private Review review;

    @Builder.Default
    private ArrayList<MultipartFile> replyFiles = new ArrayList<>();

    public void addReplyDto(ReplyDto ReplyDto){
        replyFiles.add((MultipartFile) ReplyDto);
    }

}
