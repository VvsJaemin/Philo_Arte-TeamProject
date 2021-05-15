package philoarte.jaemin.api.review.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.modelmapper.ModelMapper;
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
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Api(tags = "reviews")
public class ReviewController {

    private final ReviewServiceImpl service;
    private final ModelMapper modelMapper;

    @PostMapping("/register")
    public ResponseEntity<String> save(@ApiParam("Review review") @RequestBody ReviewDto review) {

        return ResponseEntity.ok(service.save(modelMapper.map(review, Review.class)));
    }

    @GetMapping("/list")
    public ResponseEntity<List<Review>> reviewList() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/read/{id}")
    public ResponseEntity<Optional<Review>> read(@PathVariable("id") Long id) {

        return ResponseEntity.ok(service.findById(id));
    }

    @PutMapping("/modify/{title}")
    public ResponseEntity<String> modify(@PathVariable("title") String title, @RequestBody ReviewDto review) {

        return ResponseEntity.ok(service.save(modelMapper.map(review, Review.class)));
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        service.deleteById(id);

        return ResponseEntity.ok("delete success!!");
    }
}
