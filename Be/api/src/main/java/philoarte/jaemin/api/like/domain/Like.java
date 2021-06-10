package philoarte.jaemin.api.like.domain;

import javax.persistence.*;

@Entity
@Table(name = "likes_record")
public class Like {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "like_id")
    private long likeId;
    @Column(name = "like_value")
    private Boolean likeValue;

}
