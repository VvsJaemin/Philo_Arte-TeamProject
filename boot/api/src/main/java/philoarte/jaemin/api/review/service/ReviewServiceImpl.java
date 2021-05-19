package philoarte.jaemin.api.review.service;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
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
public class ReviewServiceImpl extends AbstractService<Review> implements ReviewService{

    private final ReviewRepository repository;
    

    @Override
    public String save(Review review) {
        Review review =
        return (repository.save(review)!=null) ? "success" : "fail";
    }


    @Override
    public List<Review> findAll() {
        return repository.findAll();
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }



    @Override
    public Optional<Review> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public Long count() {
        return ;
    }

    @Override
    public Optional<Review> getOne(Long id) {
        return Optional.empty();
    }

    @Override
    public String delete(ReviewDto reviewDto) {
        return null;
    }

    @Override
    public String delete(Review review) {
        return null;
    }

    @Override
    public void deleteAll() {

    }

    @Override
    public Boolean existsById(Long id) {
        return null;
    }


}
