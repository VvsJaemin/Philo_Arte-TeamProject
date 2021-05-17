package philoarte.jaemin.api.review.domain;

import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import philoarte.jaemin.api.art.domain.Art;
import philoarte.jaemin.api.artist.domain.Artist;

import javax.persistence.*;
import java.util.Date;

@Getter
@RequiredArgsConstructor
public class ReviewDto {


    private Long reviewId;
    private String content;
    private String comment;

    private Art art;

    private Artist artist;

}
