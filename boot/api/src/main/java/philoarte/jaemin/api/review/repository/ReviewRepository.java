package philoarte.jaemin.api.review.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import philoarte.jaemin.api.review.domain.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {

}
