package philoarte.jaemin.api.upload.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PicturesDTO {

    private Long pnum;

    private String uuid;

    private String fname;

    private boolean first;

}