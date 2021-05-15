package philoarte.jaemin.api.review.domain;


import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.UpdateTimestamp;
import philoarte.jaemin.api.artist.domain.Artist;
import philoarte.jaemin.api.item.domain.Item;
import philoarte.jaemin.api.supporter.domain.Supporter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@Table(name = "reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id")
    private Long reviewId;
    @Column
    private String title;
    @Column
    private String writer;
    @Column
    private String content;
    @Temporal(TemporalType.TIMESTAMP)
    @UpdateTimestamp
    @Column(name = "reg_date")
    private Date regDate = new Date();
    @Temporal(TemporalType.TIMESTAMP)
    @UpdateTimestamp
    @Column(name = "edit_date")
    private Date editDate = new Date();;
    @Column(name = "like_Cnt")
    private int likeCnt;
    @Column(name = "dislike_Cnt")
    private int dislikeCnt;
    @Column(name = "like_check")
    private int likeCheck;

}
