package philoarte.jaemin.api.resume.domain;

import com.amazonaws.services.amplify.model.Artifact;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import philoarte.jaemin.api.artist.domain.Artist;
import philoarte.jaemin.api.category.domain.Category;
import philoarte.jaemin.api.common.domain.BaseEntity;
import philoarte.jaemin.api.common.util.ModelMapperUtils;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "resumes")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
public class Resume extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "resume_id")
    private Long resumeId;
    @Column(name = "title")
    private String title;
    @Column(name = "self_introduce")
    private String selfIntroduce;
    @Column(name = "detail")
    private String detail;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "artist_id")
    private Artist artist;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

    @JsonManagedReference
    @OneToMany(mappedBy = "resume", cascade = CascadeType.ALL)
    List<ResumeFile> resumeFiles = new ArrayList<>();

    public void changeTitle(String title) {
        this.title = title;
    }

    public void saveAll(ResumeDto resumeDto) {
        this.title = resumeDto.getTitle();
        this.selfIntroduce = resumeDto.getSelfIntroduce();
        this.detail = resumeDto.getDetail();
    }

    public static Resume of(ResumeDto resumeDto) {
        Resume resume = ModelMapperUtils.getModelMapper().map(resumeDto, Resume.class);
        return resume;
    }

}