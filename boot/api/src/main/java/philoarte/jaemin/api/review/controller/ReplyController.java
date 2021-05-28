package philoarte.jaemin.api.review.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import philoarte.jaemin.api.review.domain.Reply;
import philoarte.jaemin.api.review.domain.dto.ReplyDto;
import philoarte.jaemin.api.review.service.ReplyServiceImpl;
import philoarte.jaemin.api.review.service.ReviewFileServiceImpl;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Log4j2
@RestController
@RequestMapping("/replies")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@Api(tags = "replies")
public class ReplyController {

    private final ReplyServiceImpl service;
    private final ReviewFileServiceImpl fileService;

    @PostMapping("/register")
    @ApiOperation(value = "리뷰 댓글 등록", notes = "리뷰 댓글을 등록 합니다.")
    public ResponseEntity<String> replySave(ReplyDto replyDto) {
        log.info(replyDto);
//
        for (MultipartFile file : replyDto.getFiles()) {
            System.out.println("file" + file);
            String fileName = file.getOriginalFilename();
            replyDto.setImgName(fileName);
            replyDto.setUuid(UUID.randomUUID().toString());
        }
        service.save(replyDto);
//        fileService.saveFile(replyDto.getFiles());
        return ResponseEntity.ok("success");
    }

    @GetMapping(value = "/list/{reviewId}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ApiOperation(value = "댓글 목록", notes = "댓글 목록을 보여줍니다.")
    public ResponseEntity<List<ReplyDto>> replyList(@PathVariable("reviewId") Long reviewId) {

        log.info("reviewId : " + reviewId);
        return ResponseEntity.ok(service.getList(reviewId));
    }


    @PutMapping("/modify/{rno}")
    @ApiOperation(value = "하나의 리뷰 댓글 수정", notes = "하나의 리뷰 댓글을 수정 합니다.")
    public ResponseEntity<String> replyModify(ReplyDto replyDto) {
        log.info(replyDto);
        for (MultipartFile file : replyDto.getFiles()) {
            System.out.println("file" + file);
            String fileName = file.getOriginalFilename();
            replyDto.setImgName(fileName);
            replyDto.setUuid(UUID.randomUUID().toString());
        }
        service.modify(replyDto);
        return ResponseEntity.ok("Success Modify");
    }

    @DeleteMapping("/remove/{rno}")
    @ApiOperation(value = "하나의 리뷰 댓글 삭제", notes = "하나의 리뷰 댓글을 삭제 합니다.")
    public ResponseEntity<String> replyRemove(@PathVariable("rno") Long rno) {
        service.remove(rno);
        return ResponseEntity.ok("delete success!!");
    }
}
