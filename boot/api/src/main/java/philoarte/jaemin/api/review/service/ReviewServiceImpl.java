package philoarte.jaemin.api.review.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;
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
public class ReviewServiceImpl extends AbstractService<ReviewDto> implements ReviewService{

    private final ReviewRepository repository;

    @Override
    public String save(ReviewDto reviewDto) {
        ReviewDto review = ReviewDto.of(reviewDto);
        repository.save(review);
        return "success";
    }

    @Override
    public List<ReviewDto> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<ReviewDto> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public Long count() {
        return null;
    }

    @Override
    public Optional<ReviewDto> getOne(Long id) {
        return Optional.empty();
    }

    @Override
    public String delete(ReviewDto reviewDto) {
        return null;
    }

    @Override
    public void deleteAll() {

    }

    @Override
    public Boolean existsById(Long id) {
        return null;
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }

//
//    @Override
//    public String save(ReviewDto reviewDto) {
//        ReviewDto reviewDto = ReviewDto.of(review)
//        Review review = Review.of(reviewDto);
//        review.saveasd(reviewDto);
//        return  repository.save(review) ;
//    }


}
