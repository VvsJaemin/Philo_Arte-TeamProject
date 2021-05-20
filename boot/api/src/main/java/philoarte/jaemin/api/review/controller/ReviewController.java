package philoarte.jaemin.api.review.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import philoarte.jaemin.api.review.domain.Review;
import philoarte.jaemin.api.review.domain.ReviewDto;
import philoarte.jaemin.api.review.service.ReviewService;
import philoarte.jaemin.api.review.service.ReviewServiceImpl;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Log
@RestController
@RequestMapping("/reviews")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@Api(tags = "reviews")
public class ReviewController {

    private final ReviewServiceImpl service;


    @PostMapping("/register")
    @ApiOperation(value = "리뷰 게시글 등록", notes = "리뷰 게시글을 등록 합니다.")
    public ResponseEntity<String> save(@RequestBody ReviewDto reviewDto) {
        log.info("리뷰가 등록 되었습니다." +reviewDto);
        return ResponseEntity.ok(service.save(reviewDto));
    }

    @GetMapping("/list")
    @ApiOperation(value = "리뷰 게시글 목록", notes = "리뷰 게시글을 목록을 보여줍니다.")
    public ResponseEntity<List<Review>> reviewList() {

        return ResponseEntity.ok(service.reviewFindAll());
    }

    @GetMapping("/read/{reviewId}")
    @ApiOperation(value = "하나의 리뷰 읽기", notes = "하나의 리뷰를 읽어 줍니다.")
    public ResponseEntity<Optional<Review>> read(@PathVariable("reviewId") Long reviewId) {

        log.info("리뷰 읽기 : " + service.findById(reviewId));
        return ResponseEntity.ok(service.findById(reviewId));
    }
    @GetMapping("/paging")
    public ResponseEntity<Page<Review>> reviewPaging(final Pageable pageable){

        return ResponseEntity.ok(service.reviewPaging(pageable));
    }

    @PutMapping("/modify/{reviewId}")
    @ApiOperation(value = "하나의 리뷰 수정", notes = "하나의 리뷰를 수정 합니다.")
    public ResponseEntity<Integer> modify(@PathVariable("reviewId") Long reviewId, @RequestBody ReviewDto reviewDto) {
        if(service.findById(reviewId).isEmpty()){
            log.info("리뷰 글이 존재 하지 않아 변경할 수 없습니다.");
            ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(service.reviewUpdate(reviewDto));
    }

    @DeleteMapping("delete/{reviewId}")
    @ApiOperation(value = "하나의 리뷰 삭제", notes = "하나의 리뷰를 삭제 합니다.")
    public ResponseEntity<String> delete(@PathVariable("reviewId") Long reviewId) {
        service.reviewDelete(reviewId);

        return ResponseEntity.ok("delete success!!");
    }
}
