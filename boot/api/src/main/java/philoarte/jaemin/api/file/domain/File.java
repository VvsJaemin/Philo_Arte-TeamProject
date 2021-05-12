package philoarte.jaemin.api.file.domain;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "files")
public class File {

    @Id
    @GeneratedValue
    @Column(name = "file_id")
    private long fileId;
    @Column(name = "file_tile")
    private String fileTitle;
    @Column(name = "file_detail")
    private String fileDetail;
    @Column(name = "upload_date")
    private Date uploadDate;
    @Column(name = "edit_date")
    private Date editDate;
    @Column(name = "file_img")
    private String fileImg;
    @Column(name = "ofile_name")
    private String ofile_name;
    @Column(name = "nfile_name")
    private String nfile_name;
    @Column(name = "fsize")
    private long fsize;

    // 작성자는 아티스트 엔티티에서 연결
}
