package philoarte.jaemin.api.review.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;
import philoarte.jaemin.api.artist.domain.Artist;

import javax.persistence.*;
@Component
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ReplyDto {

    private Long replyId;

    private String text;
    private String replyer;


    private Artist artist;

    private ReviewFile reviewFile;
}
