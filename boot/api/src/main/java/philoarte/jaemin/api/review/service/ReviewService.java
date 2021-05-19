package philoarte.jaemin.api.review.service;

import philoarte.jaemin.api.review.domain.Review;
import philoarte.jaemin.api.review.domain.ReviewDto;

public interface ReviewService {

    default Review dtoToEntity(ReviewDto reviewDto){
        Review review = Review.builder()
                .reviewId(reviewDto.getReviewId())
                .content(reviewDto.getContent())
                .comment(reviewDto.getComment())
                .artist(reviewDto.getArtist())
                .art(reviewDto.getArt())
                .build();

        return review;
    }

    default ReviewDto entityToDto(Review review){
        ReviewDto reviewDto = ReviewDto.builder()
                .reviewId(review.getReviewId())
                .content(review.getContent())
                .comment(review.getComment())
                .artist(review.getArtist())
                .art(review.getArt())
                .build();

        return reviewDto;
    }

}
