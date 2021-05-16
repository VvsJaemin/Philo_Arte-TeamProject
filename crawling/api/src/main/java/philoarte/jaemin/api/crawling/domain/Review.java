package philoarte.jaemin.api.crawling.domain;

import lombok.Data;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "reviews")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id")
    private Long reviewId;

    @Column
    private String category;

    @Column
    private String title;

    @Column
    private String address;

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
    private Date editDate = new Date();

    @Column(name = "like_Cnt")
    private String likeCnt;
    @Column(name = "dislike_Cnt")
    private String dislikeCnt;
    @Column(name = "like_check")
    private int likeCheck;

    public String toString(){
        return " , " + writer + " , " + content + " , " + likeCnt +
                " , " + dislikeCnt + " , " + regDate + " \n";
    }
}