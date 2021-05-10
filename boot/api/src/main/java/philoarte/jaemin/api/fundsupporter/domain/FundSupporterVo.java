package philoarte.jaemin.api.fundsupporter.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name="fund_supporters")
public class FundSupporterVo {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long funderId;
}
