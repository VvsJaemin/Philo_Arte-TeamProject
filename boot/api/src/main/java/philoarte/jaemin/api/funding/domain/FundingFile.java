package philoarte.jaemin.api.funding.domain;

import lombok.*;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
@ToString(exclude = "funding")
@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name="funding_files")
public class FundingFile {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "funding_file_id")
    private Long fundingFileId;
    @Column(name = "uuid")
    private String uuid;
    @Column(name = "fname")
    private String fname;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "funding_id")
    private Funding funding;

    public void confirmFunding(Funding funding){
        this.funding = funding;
    }
 
}
