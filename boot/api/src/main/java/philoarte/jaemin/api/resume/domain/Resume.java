package philoarte.jaemin.api.resume.domain;

import com.amazonaws.services.amplify.model.Artifact;
import philoarte.jaemin.api.artist.domain.Artist;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "resumes")
public class Resume {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "resume_id")
    private Long resumeId;
    @Column(name = "title")
    private String title;
    @Column(name = "detail")
    private String detail;

    @ManyToOne
    @JoinColumn(name = "artist_id")
    private Artist artist;

}
