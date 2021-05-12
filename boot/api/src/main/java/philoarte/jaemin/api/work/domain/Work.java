package philoarte.jaemin.api.work.domain;

import lombok.Data;
import philoarte.jaemin.api.artist.domain.Artist;
import philoarte.jaemin.api.category.domain.Category;
import philoarte.jaemin.api.resume.domain.Resume;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "works")
public class Work {
    @Id
    @GeneratedValue
    @Column(name = "work_id")
    private long workId;
    @Column
    private String title;
    @Column
    private String description;
    @Column(name = "main_img")
    private String mainImg;
    @Column(name = "reg_date")
    private Date regDate;
    @Column(name = "edit_date")
    private Date editDate;
    @ManyToOne
    @JoinColumn(name = "artist_id")
    Artist artist;
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
    @ManyToOne
    @JoinColumn(name = "resume_id")
    private Resume resume;

}
