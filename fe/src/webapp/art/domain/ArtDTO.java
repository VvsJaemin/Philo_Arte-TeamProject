package shop.philoarte.api.art.domain;

import lombok.*;
import shop.philoarte.api.artist.domain.dto.ArtistDTO;
import shop.philoarte.api.category.domain.CategoryDTO;
import shop.philoarte.api.resume.domain.ResumeDTO;

import java.time.LocalDateTime;
import java.util.List;

@Data
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ArtDTO {

    // Art
    private Long artId;

    private String title;

    private String description;

    private String mainImg;

    private LocalDateTime regDate;

    // Artist
    private ArtistDTO artist;

    // Category
    private CategoryDTO category;

    // Resume
    private ResumeDTO resume;

    // ArtFile
    private ArtFileDTO file;

    private List<ArtFileDTO> files;

}
