package philoarte.jaemin.api.category.domain;

import lombok.Data;
import philoarte.jaemin.api.resume.domain.Resume;

import javax.persistence.*;

@Entity
@Table(name = "categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id")
    private long categoryId;
    @Column
    private long name;
    @ManyToOne
    @JoinColumn(name = "resume_id")
    private Resume resume;
}

