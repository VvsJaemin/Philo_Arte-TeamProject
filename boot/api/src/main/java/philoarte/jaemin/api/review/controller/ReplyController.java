package philoarte.jaemin.api.review.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import philoarte.jaemin.api.review.domain.dto.ReplyDto;
import philoarte.jaemin.api.review.service.ReplyServiceImpl;

import java.util.List;

@Log4j2
@RestController
@RequestMapping("/replies")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@Api(tags = "replies")
public class ReplyController {

    private final ReplyServiceImpl service;

    @PostMapping("/register")
    @ApiOperation(value = "리뷰 댓글 등록", notes = "리뷰 댓글을 등록 합니다.")
    public ResponseEntity<String> save(@RequestBody ReplyDto replyDto) {
        service.save(replyDto);
        return ResponseEntity.ok("success");
    }

    @GetMapping(value="/list/{reviewId}", produces= MediaType.APPLICATION_JSON_VALUE)
    @ApiOperation(value = "댓글 목록", notes = "댓글 목록을 보여줍니다.")
    public ResponseEntity<List<ReplyDto>> replyList(@PathVariable("reviewId")Long reviewId) {

        log.info("reviewId" + reviewId);
        return ResponseEntity.ok(service.getList(reviewId));
    }


    @PutMapping("/modify/{rno}")
    @ApiOperation(value = "하나의 리뷰 댓글 수정", notes = "하나의 리뷰 댓글을 수정 합니다.")
    public ResponseEntity<String> modify(@RequestBody ReplyDto replyDto) {
        log.info(replyDto);
        service.modify(replyDto);
        return ResponseEntity.ok("Success Modify");
    }

    @DeleteMapping("/remove/{rno}")
    @ApiOperation(value = "하나의 리뷰 댓글 삭제", notes = "하나의 리뷰 댓글을 삭제 합니다.")
    public ResponseEntity<String> delete(@PathVariable("rno") Long rno) {
        service.remove(rno);

        return ResponseEntity.ok("delete success!!");
    }
}
