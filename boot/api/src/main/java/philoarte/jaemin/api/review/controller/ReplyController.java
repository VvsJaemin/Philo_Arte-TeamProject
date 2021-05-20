package philoarte.jaemin.api.review.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import philoarte.jaemin.api.review.domain.Reply;
import philoarte.jaemin.api.review.domain.ReplyDto;
import philoarte.jaemin.api.review.domain.Review;
import philoarte.jaemin.api.review.domain.ReviewDto;
import philoarte.jaemin.api.review.service.ReplyServiceImpl;

import java.util.List;
import java.util.Optional;

@Log
@RestController
@RequestMapping("/replys")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@Api(tags = "replys")
public class ReplyController {

    private final ReplyServiceImpl service;

    @PostMapping("/register")
    @ApiOperation(value = "리뷰 댓글 등록", notes = "리뷰 댓글을 등록 합니다.")
    public ResponseEntity<String> save(@RequestBody ReplyDto replyDto) {
        log.info("리뷰가 등록 되었습니다." +replyDto);
        return ResponseEntity.ok(service.save(replyDto));
    }

    @GetMapping("/list")
    @ApiOperation(value = "댓글 목록", notes = "댓글 목록을 보여줍니다.")
    public ResponseEntity<List<Reply>> replyList() {

        return ResponseEntity.ok(service.replyFindAll());
    }

    @GetMapping("/read/{replyId}")
    @ApiOperation(value = "하나의 리뷰 댓글 읽기", notes = "하나의 리뷰 댓글을 읽어 줍니다.")
    public ResponseEntity<Optional<Reply>> read(@PathVariable("replyId") Long replyId) {

        log.info("리뷰 댓글 읽기 : " + service.findById(replyId));
        return ResponseEntity.ok(service.findById(replyId));
    }

    @PutMapping("/modify/{replyId}")
    @ApiOperation(value = "하나의 리뷰 댓글 수정", notes = "하나의 리뷰 댓글을 수정 합니다.")
    public ResponseEntity<Integer> modify(@PathVariable("replyId") Long replyId, @RequestBody ReplyDto replyDto) {
        if(service.findById(replyId).isEmpty()){
            log.info("리뷰 글이 존재 하지 않아 변경할 수 없습니다.");
            ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(service.replyUpdate(replyDto));
    }

    @DeleteMapping("delete/{replyId}")
    @ApiOperation(value = "하나의 리뷰 댓글 삭제", notes = "하나의 리뷰 댓글을 삭제 합니다.")
    public ResponseEntity<String> delete(@PathVariable("replyId") Long replyId) {
        service.replyDelete(replyId);

        return ResponseEntity.ok("delete success!!");
    }
}
