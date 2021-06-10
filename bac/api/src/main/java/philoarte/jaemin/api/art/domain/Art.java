package philoarte.jaemin.api.art.domain;

import lombok.*;
import philoarte.jaemin.api.artist.domain.Artist;
import philoarte.jaemin.api.category.domain.Category;
import philoarte.jaemin.api.common.domain.BaseEntity;
import philoarte.jaemin.api.resume.domain.Resume;

import javax.persistence.*;
@Getter
@ToString(exclude = {"artist","category","resume"})
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "arts")
public class Art extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long artId;
    @Column
    private String title;
    @Column
    private String description;
    @Column
    private String mainImg;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "artist_id")
    Artist artist;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "resume_id")
    private Resume resume;
}