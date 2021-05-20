package philoarte.jaemin.api.review.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import philoarte.jaemin.api.common.service.AbstractService;
import philoarte.jaemin.api.common.util.ModelMapperUtils;
import philoarte.jaemin.api.review.domain.Review;
import philoarte.jaemin.api.review.domain.ReviewDto;
import philoarte.jaemin.api.review.repository.ReviewRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService{
    private final ReviewRepository repository;

    @Override
    public int reviewUpdate(ReviewDto reviewDto) {
        Review reviewUpdate = dtoToEntity(reviewDto);
       return repository.reviewUpdate(reviewUpdate.getReviewId(), reviewUpdate.getContent());
    }

    @Override
    public String save(ReviewDto reviewDto) {
        Review review = dtoToEntity(reviewDto);
        repository.save(review);
        return "success";
    }

    @Override
    public Optional<Review> findById(Long id) {
        return repository.findById(id);
    }


    @Override
    public void reviewDelete(Long reviewId) {
        repository.reviewDelete(reviewId);
    }


    @Override
    public List<Review> reviewFindAll() {
        return repository.reviewFindAll();
    }

    @Override
    public Page<Review> reviewPaging(Pageable pageable) {
        return repository.reviewPaging(PageRequest.of(1,10));
    }

}
