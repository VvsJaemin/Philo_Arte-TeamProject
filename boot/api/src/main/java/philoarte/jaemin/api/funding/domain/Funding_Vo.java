package philoarte.jaemin.api.funding.domain;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "fundings")
public class Funding_Vo {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long funding_Id;
}
