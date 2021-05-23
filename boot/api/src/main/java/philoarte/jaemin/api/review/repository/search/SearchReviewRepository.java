package philoarte.jaemin.api.review.repository.search;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import philoarte.jaemin.api.review.domain.Review;

public interface SearchReviewRepository {

    Review search();

    Page<Object[]> searchPage(String type, String keyword, Pageable pageable);
}
