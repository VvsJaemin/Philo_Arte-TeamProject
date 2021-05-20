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
@ToString
public class Reply extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reply_id")
    private Long replyId;

    private String text;
    private String replyer;

    @ManyToOne
    @JoinColumn(name="review_id")
    private Review review;

    @ManyToOne
    @JoinColumn(name="review_file_id")
    private ReviewFile reviewFile;
}
