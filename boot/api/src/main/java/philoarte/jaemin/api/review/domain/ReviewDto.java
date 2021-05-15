package philoarte.jaemin.api.review.domain;

import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import philoarte.jaemin.api.artist.domain.Artist;
import philoarte.jaemin.api.item.domain.Item;
import philoarte.jaemin.api.supporter.domain.Supporter;

import javax.persistence.*;
import java.util.Date;

@Getter
@RequiredArgsConstructor
public class ReviewDto {

    private Long reviewId;
    private String title;
    private String writer;
    private String content;
    private Date regDate;
    private Date editDate;
    private int likeCnt;
    private int dislikeCnt;
    private int likeCheck;

}
