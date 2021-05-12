package philoarte.jaemin.api.user.service;

import philoarte.jaemin.api.user.domain.UserDto;
import philoarte.jaemin.api.user.domain.UserVo;

import java.util.List;

public interface UserService {
    String signup(UserVo user);

    UserDto signin(UserVo user);

    List<UserVo> findAll();

}