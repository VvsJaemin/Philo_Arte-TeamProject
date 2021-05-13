package philoarte.jaemin.api.crawling.repository;

import philoarte.jaemin.api.crawling.domain.Funding;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FundingCrawlingRepository extends JpaRepository<Funding, Long> {
}
