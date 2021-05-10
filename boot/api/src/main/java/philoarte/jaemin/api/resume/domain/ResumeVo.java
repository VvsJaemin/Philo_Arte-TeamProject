package philoarte.jaemin.api.resume.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "resumes")
public class ResumeVo {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long resumeId;
}
