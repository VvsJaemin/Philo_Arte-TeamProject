package philoarte.jaemin.api.review.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import javax.persistence.*;
@Component
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReviewFileDto {

    private Long reviewFileId;
    private String uuid;
    private String fileTitle;
    private String fileDetail;
    private String fname;
    private Boolean repImg;

    private Review review;
}
