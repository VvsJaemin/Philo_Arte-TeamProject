package philoarte.jaemin.api.invest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import philoarte.jaemin.api.invest.domain.Invest;

public interface InvestRepository extends JpaRepository<Invest, Long> {
}
