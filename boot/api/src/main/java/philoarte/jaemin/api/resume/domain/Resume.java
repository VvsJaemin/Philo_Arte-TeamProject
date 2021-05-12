package philoarte.jaemin.api.resume.domain;

import lombok.Data;
import philoarte.jaemin.api.category.domain.Category;
import philoarte.jaemin.api.file.domain.File;
import philoarte.jaemin.api.work.domain.Work;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
@Entity
@Table(name = "resumes")
public class Resume {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "resume_id")
    private long resumeId;
    @Column(name = "title")
    private String title;
    @Column(name = "detail")
    private String detail;
    @Column(name = "coworker")
    private String coworker;
    @Column(name = "main_pic")
    private String mainPic;
    @Column(name = "main_pic_title")
    private String mainPicTitle;
    @Column(name = "main_pic_date")
    private Date mainPicDate;

    // https://grafolio.naver.com/works/1931796

    // 아티스트에서 작성자 가져오기 (작성자는 한개의 레쥬메만 가지고 있음 (모든 작품을 하나의 레쥬메에 올려준다))

    // works테이블(썸네일) / 파일 테이블(원본)에서 작품 여러개 가져오기(1:N)
    // @OneToMany(mappedBy = "work_id")
    // List<Work> works;

    // @OneToMany(mappedBy = "file_id")
    // List<File> files;

    // 한개의 레쥬메에 여러개의 카테고리 설정가능
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

}
