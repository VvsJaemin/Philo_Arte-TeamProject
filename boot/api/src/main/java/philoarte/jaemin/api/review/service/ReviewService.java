package philoarte.jaemin.api.review.service;

import philoarte.jaemin.api.review.domain.Review;
import philoarte.jaemin.api.review.domain.ReviewDto;

import java.util.List;

public interface ReviewService {
    List<ReviewDto> findAll();

}
