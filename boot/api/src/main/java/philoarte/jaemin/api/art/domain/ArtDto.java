package philoarte.jaemin.api.art.domain;

import lombok.Data;

import java.util.Date;

@Data
public class ArtDto {
    private Long worksId;

    private Long categoryId;

    private String title;

    private String description;

    private Date regDate = new Date();

    private Date editDate = new Date();

    private String mainImg;
}
