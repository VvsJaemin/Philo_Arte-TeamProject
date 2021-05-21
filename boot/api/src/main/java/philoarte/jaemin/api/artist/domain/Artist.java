package philoarte.jaemin.api.artist.domain;

import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import philoarte.jaemin.api.common.domain.BaseEntity;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;

@EntityListeners(value = {AuditingEntityListener.class})
@Entity
@Table(name = "artists")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = "roles")
public class Artist extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JoinColumn(name = "artist_id")
    private Long artistId;

    //, unique = true, nullable = false
    @Column(name = "username")
    private String username;

    //    @Size(min = 8, message = "Minimum Password Length: 8 characters")
    //, columnDefinition="Number(10) default '12345678'"
    @Column(name = "password")
    private String password;

    //    @Embedded
    @Column(name = "artist_name")
    private String artistName;

    @Column(name = "email")
    private String email;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "address")
    private String address;

    @Column(name = "school")
    private String school;

    @Column(name = "department")
    private String department;

    @ElementCollection(fetch = FetchType.LAZY)
    List<Role> roles;

    public void changeRoles(List<Role> roles){
        this.roles = roles;
    }

}