package philoarte.jaemin.api.fundsupplier.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "fund_suppliers")
public class FundSupplierVo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long fundeeId;
}
