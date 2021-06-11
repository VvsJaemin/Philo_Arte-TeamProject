package shop.philoarte.api.art.domain;

import lombok.*;
import shop.philoarte.api.artist.domain.dto.ArtistDto;
import shop.philoarte.api.category.domain.CategoryDto;
import shop.philoarte.api.resume.domain.ResumeDto;

import java.time.LocalDateTime;
import java.util.List;

@Data
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ArtDTO {

    private Long artId;

    private String title;

    private String description;

    private String mainImg;

    private LocalDateTime regDate;

    private ArtistDto artist;

    private CategoryDto category;

    private ResumeDto resume;

    private ArtFileDTO file;

    private List<ArtFileDTO> files;

}
