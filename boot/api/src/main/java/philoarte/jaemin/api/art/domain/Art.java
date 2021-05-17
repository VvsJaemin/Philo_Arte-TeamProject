package philoarte.jaemin.api.art.domain;

import philoarte.jaemin.api.artist.domain.Artist;
import philoarte.jaemin.api.category.domain.Category;

import javax.persistence.*;

@Entity
@Table(name = "arts")
public class Art {
    @Id
    @GeneratedValue
    @Column(name = "art_id")
    private Long artId;
    @Column
    private String title;
    @Column
    private String description;
    @Column(name = "main_img")
    private String mainImg;

//    @ManyToOne
//    @JoinColumn(name = "artist_id")
//    private Artist artist;
//
//    @ManyToOne
//    @JoinColumn(name = "category_id")
//    private Category category;

}
