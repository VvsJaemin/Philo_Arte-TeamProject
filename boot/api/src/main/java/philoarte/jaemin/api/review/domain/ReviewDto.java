package philoarte.jaemin.api.review.domain;

import lombok.*;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;
import philoarte.jaemin.api.art.domain.Art;
import philoarte.jaemin.api.artist.domain.Artist;
import philoarte.jaemin.api.common.util.ModelMapperUtils;

import javax.persistence.*;
import java.util.Date;
@Component
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ReviewDto {


    private Long reviewId;

    private String title;
    private String content;

    private Art art;

    private Artist artist;


}
