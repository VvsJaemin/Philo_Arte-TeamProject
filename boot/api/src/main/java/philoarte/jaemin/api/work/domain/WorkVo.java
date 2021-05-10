package philoarte.jaemin.api.work.domain;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Table(name = "works")
public class WorkVo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long worksId;

    @Column(name = "category_id")
    private Long categoryId;

    @Column(name ="title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name="reg_date")
    private Date regDate = new Date();

    @Column(name = "edit_date")
    private Date editDate = new Date();

    @Column(name = "main_img")
    private String mainImg;

}
