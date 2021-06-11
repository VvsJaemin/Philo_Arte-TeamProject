package shop.philoarte.api.art.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ArtFileDTO {

    private Long fileId;

    private String uuid;

    private String originalFileName;

    private String savedFileName;

    private String workedDate;

    private Boolean repImg;

    private ArtDTO art;

}
