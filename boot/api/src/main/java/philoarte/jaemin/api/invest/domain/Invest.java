package philoarte.jaemin.api.invest.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name ="invests")
public class Invest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "invest_id")
    private long investId;


}
