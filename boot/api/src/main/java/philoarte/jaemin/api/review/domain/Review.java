package philoarte.jaemin.api.review.domain;


import lombok.Data;
import lombok.NoArgsConstructor;
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
    @Column(name = "parent_item") // 리뷰를 달 게시글 번호(부모글)
    private int parentItem;
    @Column(name = "parent_review") // 대댓글 댓글의 부모글
    private String parentReview;
    @Column(name = "writer") // creatorId
    private String writer;
    @Column(name = "content")
    private String content;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "reg_date")
    private Date regDate;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "edit_date")
    private Date editDate;
    @Column(name = "like_Cnt")
    private int likeCnt;
    @Column(name = "dislike_Cnt")
    private int dislikeCnt;
    @Column(name = "like_check")
    private int likeCheck;
    // foreign key 유저 번호, 보드 번호
    @ManyToOne
    private Artist artist; // 댓글 or 대댓글 작성자, 좋아요 연결
    @ManyToOne
    private Supporter supporter; // 댓글 or 대댓글 작성자, 좋아요 연결
    @ManyToOne
    private Item item; // 댓글이 있을 아이템 연결
}
