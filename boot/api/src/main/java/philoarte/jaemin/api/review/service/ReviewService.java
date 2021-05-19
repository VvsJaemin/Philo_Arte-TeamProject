package philoarte.jaemin.api.review.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import philoarte.jaemin.api.common.util.ModelMapperUtils;
import philoarte.jaemin.api.review.domain.Review;
import philoarte.jaemin.api.review.domain.ReviewDto;

import java.util.List;

public interface ReviewService {

    Review reviewUpdate(Review review);
    List<Review> reviewFindAll();
    Page<Review> reviewPaging(Pageable pageable);

    default Review dtoToEntity(ReviewDto reviewDto){
        Review review = ModelMapperUtils.getModelMapper().map(reviewDto, Review.class);
//        Review review = Review.builder()
//                .reviewId(reviewDto.getReviewId())
//                .content(reviewDto.getContent())
//                .comment(reviewDto.getComment())
//                .artist(reviewDto.getArtist())
//                .art(reviewDto.getArt())
//                .build();

        return review;
    }

    default ReviewDto entityToDto(Review review){
        ReviewDto reviewDto = ModelMapperUtils.getModelMapper().map(review, ReviewDto.class);
//        ReviewDto reviewDto = ReviewDto.builder()
//                .reviewId(review.getReviewId())
//                .content(review.getContent())
//                .comment(review.getComment())
//                .artist(review.getArtist())
//                .art(review.getArt())
//                .build();

        return reviewDto;
    }

}
