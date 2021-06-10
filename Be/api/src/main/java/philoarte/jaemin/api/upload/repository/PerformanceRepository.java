package philoarte.jaemin.api.upload.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import philoarte.jaemin.api.upload.entity.Performance;

public interface PerformanceRepository extends JpaRepository<Performance, Long> {
}
