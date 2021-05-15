package philoarte.jaemin.api.review.service;

import philoarte.jaemin.api.funding.domain.Funding;
import philoarte.jaemin.api.review.domain.Review;

import java.util.List;

public interface ReviewService {
    List<Review> findAll();
}
