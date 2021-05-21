package philoarte.jaemin.api.review.domain.dto;

import lombok.*;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;
import philoarte.jaemin.api.art.domain.Art;
import philoarte.jaemin.api.artist.domain.Artist;
import philoarte.jaemin.api.common.util.ModelMapperUtils;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ReviewDto {


    private Long reviewId;

    private String title;
    private String content;

    private Long writerId;
    private String writerName;
    private Long artId;
    private int replyCount;

    private LocalDateTime regDate;
    private LocalDateTime modDate;

    private Art art;

    private Artist artist;
    @Builder.Default
    private List<ReviewFileDto> reviewFileDtoList = new ArrayList<>();

}
