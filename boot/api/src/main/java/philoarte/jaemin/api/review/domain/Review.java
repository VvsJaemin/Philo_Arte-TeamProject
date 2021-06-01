package philoarte.jaemin.api.review.domain;


import lombok.*;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.web.multipart.MultipartFile;
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
@ToString(exclude = {"artist, art"})
public class Review extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id")
    private Long reviewId;

    private String title;

    private String content;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "artist_id")
    private Artist artist;


    public void changeTitle(String title){
        this.title =title;
    }

    public void changeContent(String content){
        this.content=content;
    }

}
