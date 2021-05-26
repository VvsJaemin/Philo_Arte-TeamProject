package philoarte.jaemin.api.review.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import philoarte.jaemin.api.review.domain.ReviewFile;
import philoarte.jaemin.api.review.domain.dto.PageRequestDto;
import philoarte.jaemin.api.review.domain.dto.PageResultDto;
import philoarte.jaemin.api.review.domain.dto.ReviewDto;
import philoarte.jaemin.api.review.domain.dto.ReviewFileDto;
import philoarte.jaemin.api.review.service.ReviewFileServiceImpl;
import philoarte.jaemin.api.review.service.ReviewServiceImpl;

import javax.annotation.Nullable;
import java.util.List;

@Log4j2
@RestController
@RequestMapping(value = "/reviews", method = {RequestMethod.GET, RequestMethod.POST})
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@Api(tags = "reviews")
public class ReviewController {

    private final ReviewServiceImpl service;
    private final ReviewFileServiceImpl reviewFileService;


    @PostMapping("/register")
    @ApiOperation(value = "리뷰 게시글 등록", notes = "리뷰 게시글을 등록 합니다.")
    public ResponseEntity<Long> save(@RequestBody ReviewDto reviewDto) {

//        List<ReviewFileDto> uploadfile = reviewDto.getReviewFileDtoList();

        log.info("리뷰가 등록 되었습니다." +reviewDto);
        return ResponseEntity.ok(service.save(reviewDto));
    }

    @GetMapping("/list/pages")
    @ApiOperation(value = "리뷰 게시글 목록", notes = "리뷰 게시글을 목록을 보여줍니다.")
    public ResponseEntity<PageResultDto<ReviewDto, Object[]>> reviewList(PageRequestDto pageRequestDto) {
            log.info("pageRequestDto : " + pageRequestDto);
        return ResponseEntity.ok(service.getList(pageRequestDto));
    }

    @GetMapping("/read/{reviewId}")
    @ApiOperation(value = "하나의 리뷰 읽기", notes = "하나의 리뷰를 읽어 줍니다.")
    public ResponseEntity<ReviewDto> read(@PathVariable("reviewId") Long reviewId) {

        log.info("리뷰 읽기 : " + reviewId);
        return ResponseEntity.ok(service.get(reviewId));
    }

    @PutMapping("/modify/{reviewId}")
    @ApiOperation(value = "하나의 리뷰 수정", notes = "하나의 리뷰를 수정 합니다.")
    public ResponseEntity<String> modify(@RequestBody ReviewDto reviewDto) {
        log.info(reviewDto);
        service.modify(reviewDto);

        return ResponseEntity.ok("Success Modify");
    }

    @DeleteMapping("remove/{reviewId}")
    @ApiOperation(value = "하나의 리뷰 삭제", notes = "하나의 리뷰를 삭제 합니다.")
    public ResponseEntity<String> delete(@PathVariable("reviewId") Long reviewId) {

        service.removeWithReplies(reviewId);
    
        return ResponseEntity.ok("delete success!!");
    }
}
