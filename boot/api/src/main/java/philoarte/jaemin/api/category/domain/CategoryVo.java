package philoarte.jaemin.api.category.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name="categorys")
public class CategoryVo {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long category_Id;
}
