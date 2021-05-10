package philoarte.jaemin.api.user.controller;


import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import philoarte.jaemin.api.user.domain.UserDto;
import philoarte.jaemin.api.user.domain.UserVo;
import philoarte.jaemin.api.user.service.UserServiceImpl;

import java.util.List;

@Log
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/users")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Api(tags = "users")
public class UserController {

    private final UserServiceImpl userService;
    private final ModelMapper modelMapper; // 프론트 ModelMapper

    @PostMapping("/signup")
    @ApiOperation(value = "${UserController.signup}")
    @ApiResponses(value = {@ApiResponse(code = 400, message = "Something went wrong"),
            @ApiResponse(code = 403, message = "Access Denied"),
            @ApiResponse(code = 422, message = "Invaild username/password supplied")})
    public ResponseEntity<String> signup(@ApiParam("Signup User") @RequestBody UserDto user) {

        return ResponseEntity.ok(userService.signup(modelMapper.map(user, UserVo.class))); // 컴파일 이후에 연결(after mapping)
    }

    @PostMapping("/signin")
    @ApiOperation(value = "${UserController.signin}", notes = "")
    @ApiResponses(value = {@ApiResponse(code = 400, message = "Something went wrong"),
            @ApiResponse(code = 422, message = "Invaild username/password supplied")})
    public ResponseEntity<UserDto> signin(@ApiParam("signin User") @RequestBody UserDto user) {

        return ResponseEntity.ok(userService.signin(modelMapper.map(user, UserVo.class))); // 컴파일 이후에 연결(after mapping)
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<UserVo>> findAll() {
        return ResponseEntity.ok(userService.findAll());
    }


    @GetMapping("/all")
    public ResponseEntity<List<UserVo>> all() {
        log.info("로그인 하지 않은 사용자도 접근 가능한 URI");
        return ResponseEntity.ok(null);
    }

    @GetMapping("/{username}")
    public ResponseEntity<?> auth(@PathVariable String username) {
        log.info("로그인한 사용자만 접근 가능한 URI");
        return ResponseEntity.ok(null);
    }

    @GetMapping("/{admin}")
    public ResponseEntity<?> admin() {
        log.info("관리자만 접근 가능한 URI");
        return ResponseEntity.ok(null);
    }
}