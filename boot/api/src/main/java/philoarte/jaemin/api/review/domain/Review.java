package philoarte.jaemin.api.review.domain;


import lombok.*;
import org.hibernate.annotations.UpdateTimestamp;
import philoarte.jaemin.api.art.domain.Art;
import philoarte.jaemin.api.artist.domain.Artist;
import philoarte.jaemin.api.common.domain.BaseEntity;
import philoarte.jaemin.api.common.util.ModelMapperUtils;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "reviews")
public class Review extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id")
    private Long reviewId;
    @Column(name = "content")
    private String content;
    @Column(name = "comment")
    private String comment;


    @ManyToOne
    @JoinColumn(name = "artist_id")
    private Artist artist;

    @ManyToOne
    @JoinColumn(name = "art_id")
    private Art art;
    
    @Override
    public String toString() {
        return "," + content + "," + comment + getRegDate() + getModDate() + "\n";
    }

    public void setRegDate(LocalDateTime now) {
    }

    public void setModDate(LocalDateTime now) {

    }
}
