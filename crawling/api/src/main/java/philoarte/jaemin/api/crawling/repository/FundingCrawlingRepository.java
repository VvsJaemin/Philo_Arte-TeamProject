package philoarte.jaemin.api.crawling.repository;

import philoarte.jaemin.api.crawling.domain.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FundingCrawlingRepository extends JpaRepository<Review, Long> {
}
