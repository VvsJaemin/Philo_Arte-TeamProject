package philoarte.jaemin.api.art.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ArtDto {
    private Long artId;
    private String title;
    private String description;
    private String mainImg;
    private LocalDateTime regDate;
    private LocalDateTime modDate;
}