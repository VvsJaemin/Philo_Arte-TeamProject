package philoarte.jaemin.api.funditem.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name ="fund_items")
public class FundItemVo {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long fundItemId;
}
