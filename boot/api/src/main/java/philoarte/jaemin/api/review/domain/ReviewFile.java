package philoarte.jaemin.api.review.domain;

import lombok.*;
import org.springframework.stereotype.Component;
import philoarte.jaemin.api.common.domain.BaseEntity;

import javax.persistence.*;
@Component
@ToString(exclude="review")
@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "review_files")
public class ReviewFile extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_file_id")
    private Long reviewFileId;
    @Column(name = "uuid")
    private String uuid;
    @Column(name = "file_title")
    private String fileTitle;
    @Column(name = "file_detail")
    private String fileDetail;
    @Column(name = "fname")
    private String fname;
    @Column(name = "rep_img")
    private Boolean repImg;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="review_id")
    private Review review;

    public void confirmReview(Review review){
        this.review = review;
    }
}
