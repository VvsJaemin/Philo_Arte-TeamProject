package philoarte.jaemin.api.review.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import philoarte.jaemin.api.common.service.AbstractService;
import philoarte.jaemin.api.review.domain.Review;
import philoarte.jaemin.api.review.repository.ReviewRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl extends AbstractService<Review> implements ReviewService{

    private final ReviewRepository repository;

    @Override
    public String save(Review review) {
        return (repository.save(review) != null) ? "Success" : "Failed";
    }

    @Override
    public Optional<Review> findById(long id) {
        return repository.findById(id);
    }

    @Override
    public Page<Review> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public int count() {
        return 0;
    }

    @Override
    public Optional<Review> getOne(long id) {
        return Optional.empty();
    }

    @Override
    public Long delete(long id) {
        return null;
    }

    @Override
    public Boolean existsById(long id) {
        return null;
    }

    @Override
    public void deleteById(long id) {
        repository.deleteById(id);
    }

    @Override
    public List<Review> findAll() {
        return repository.findAll();
    }
}
