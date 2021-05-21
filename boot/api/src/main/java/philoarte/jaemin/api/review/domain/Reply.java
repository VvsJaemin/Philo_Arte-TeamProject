package philoarte.jaemin.api.review.domain;

import lombok.*;
import philoarte.jaemin.api.artist.domain.Artist;
import philoarte.jaemin.api.common.domain.BaseEntity;

import javax.persistence.*;

@Entity
@Table(name = "replys")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString(exclude = "review")
public class Reply extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "rno")
    private Long rno;
    @Column(name = "text")
    private String text;
    @Column(name = "replyer")
    private String replyer;

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


//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "review_file_id")
//    private Long reviewFileId;



}
