package philoarte.jaemin.api.art.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import philoarte.jaemin.api.art.domain.Art;

public interface ArtRepository extends JpaRepository<Art, Long> {
}
