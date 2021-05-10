package philoarte.jaemin.api.fundinvest.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name ="fund_invests")
public class FundInvestVo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long investId;
}
