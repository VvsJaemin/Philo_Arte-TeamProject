package philoarte.jaemin.api.upload.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import philoarte.jaemin.api.upload.entity.Pictures;

public interface PicturesRepository extends JpaRepository<Pictures, Long> {
}
