package philoarte.jaemin.api.work.domain;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Data
public class WorkDto {
    private Long worksId;

    private Long categoryId;

    private String title;

    private String description;

    private Date regDate = new Date();

    private Date editDate = new Date();

    private String mainImg;
}
