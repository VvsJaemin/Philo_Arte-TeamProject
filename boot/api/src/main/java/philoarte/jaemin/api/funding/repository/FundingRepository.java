package philoarte.jaemin.api.funding.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import philoarte.jaemin.api.funding.domain.Funding;

public interface FundingRepository extends JpaRepository<Funding, Long> {

}
