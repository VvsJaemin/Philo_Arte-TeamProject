package philoarte.jaemin.api.review.controller;

import io.swagger.annotations.Api;
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
public class ReviewController {

    private final ReviewServiceImpl service;


    @PostMapping("/register")
    public ResponseEntity<String> save(@RequestBody ReviewDto reviewDto) {
        log.info("리뷰가 등록 되었습니다." +reviewDto);
        return ResponseEntity.ok(service.save(service.dtoToEntity(reviewDto)));
    }

    @GetMapping("/list")
    public ResponseEntity<List<Review>> reviewList() {
        return ResponseEntity.ok(service.reviewFindAll());
    }

    @GetMapping("/read/{reviewId}")
    public ResponseEntity<Optional<Review>> read(@PathVariable("reviewId") Long reviewId) {

        log.info("리뷰 읽기 : " + service.findById(reviewId));
        return ResponseEntity.ok(service.findById(reviewId));
    }
    @GetMapping("/paging")
    public ResponseEntity<Page<Review>> reviewPaging(final Pageable pageable){

        return ResponseEntity.ok(service.reviewPaging(pageable));
    }

    @PutMapping("/modify/{reviewId}")
    public ResponseEntity<Review> modify(@PathVariable("reviewId") Long reviewId, @RequestBody ReviewDto reviewDto) {
        if(service.findById(reviewId).isEmpty()){
            log.info("리뷰 글이 존재 하지 않아 변경할 수 없습니다.");
            ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(service.reviewUpdate(service.dtoToEntity(reviewDto)));
    }

    @DeleteMapping("delete/{reviewId}")
    public ResponseEntity<String> delete(@PathVariable("reviewId") Long reviewId) {
        service.deleteById(reviewId);

        return ResponseEntity.ok("delete success!!");
    }
}
