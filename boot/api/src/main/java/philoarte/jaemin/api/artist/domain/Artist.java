package philoarte.jaemin.api.artist.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "fund_suppliers")
public class Artist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long fundeeId;
}
