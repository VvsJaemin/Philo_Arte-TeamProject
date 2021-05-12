package philoarte.jaemin.api.user.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import philoarte.jaemin.api.security.domain.SecurityProvider;
import philoarte.jaemin.api.security.exception.SecurityRuntimeException;
import philoarte.jaemin.api.user.domain.Role;
import philoarte.jaemin.api.user.domain.UserDto;
import philoarte.jaemin.api.user.domain.UserVo;
import philoarte.jaemin.api.user.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Log
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final SecurityProvider provider;
    private final AuthenticationManager manager;
    private final ModelMapper modelMapper;

    @Override
    public String signup(UserVo user) {
        if (!userRepository.existsByUsername(user.getUsername())) {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            List<Role> list = new ArrayList<>();
            list.add(Role.USER);
            user.setRoles(list);
            userRepository.save(user);
            return provider.createToken(user.getUsername(), user.getRoles());
        } else {
            throw new SecurityRuntimeException("Username is already in use", HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    @Override
    public UserDto signin(UserVo user) {
        try {
            UserVo loginedUser = userRepository.signin(user.getUsername(), user.getPassword());
            UserDto userDto = modelMapper.map(user, UserDto.class);
            String token = provider.createToken(user.getUsername(),
                    userRepository.findByUsername(user.getUsername()).getRoles());
            log.info("ISSUED TOKEN :::::::: " + token);
            userDto.setToken(token);
            return userDto;

        } catch (Exception e) {
            throw new SecurityRuntimeException("Invalid Username / Password supplied", HttpStatus.UNPROCESSABLE_ENTITY);
        }
        // 보안성 향상 - vo를 감싸기 위해 모델 맵퍼를 사용하여 dto로 던진다.
    }

    @Override
    public List<UserVo> findAll() {
        return userRepository.findAll();
    }


}
