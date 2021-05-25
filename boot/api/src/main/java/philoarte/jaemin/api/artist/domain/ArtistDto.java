package philoarte.jaemin.api.artist.domain;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Component
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ArtistDto {
    @ApiModelProperty(position = 0)
    private Long artistId;
    @ApiModelProperty(position = 1)
    private String username;
    @ApiModelProperty(position = 2)
    private String password;
    @ApiModelProperty(position = 3)
    private String name;
    @ApiModelProperty(position = 4)
    private String email;
    @ApiModelProperty(position = 5)
    private String phoneNumber;
    @ApiModelProperty(position = 6)
    private String address;
    @ApiModelProperty(position = 7)
    private String school;
    @ApiModelProperty(position = 8)
    private String department;
    @ApiModelProperty(position = 9)
    private List<Role> roles;
    @ApiModelProperty(position = 10)
    private String token;

}