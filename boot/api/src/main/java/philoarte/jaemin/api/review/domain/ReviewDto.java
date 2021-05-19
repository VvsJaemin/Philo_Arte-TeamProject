package philoarte.jaemin.api.review.domain;

import lombok.*;
import org.modelmapper.ModelMapper;
import philoarte.jaemin.api.art.domain.Art;
import philoarte.jaemin.api.artist.domain.Artist;
import philoarte.jaemin.api.common.util.ModelMapperUtils;

import javax.persistence.*;
import java.util.Date;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ReviewDto {


    private Long reviewId;
    private String content;
    private String comment;

    private Art art;

    private Artist artist;


}
