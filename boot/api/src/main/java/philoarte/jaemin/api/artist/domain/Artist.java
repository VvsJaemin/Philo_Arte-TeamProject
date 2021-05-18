package philoarte.jaemin.api.artist.domain;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import philoarte.jaemin.api.common.domain.BaseEntity;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;

@EntityListeners(value = {AuditingEntityListener.class})
@Entity
@Table(name = "artists")
@Data
@NoArgsConstructor
@ToString(exclude = "roles")
public class Artist extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "artist_id")
    private long artistId;
    @Column(unique = true, nullable = false)
    private String username;
    @Size(min = 8, message = "Minimum Password Length: 8 characters")
    private String password;
    @Column(unique = true, nullable = false)
    private String name;
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

    @ElementCollection(fetch = FetchType.EAGER)
    List<Role> roles;


}