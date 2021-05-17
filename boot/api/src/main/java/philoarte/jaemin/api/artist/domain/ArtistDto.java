package philoarte.jaemin.api.artist.domain;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class ArtistDto {
    @ApiModelProperty(position = 0)
    private long artistId;
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
    private LocalDateTime regData;
    @ApiModelProperty(position = 10)
    private LocalDateTime modDate;
//    @ApiModelProperty(position = 11)
////    private List<Role> roles;
//    @ApiModelProperty(position = 12)
//    private String token;

}