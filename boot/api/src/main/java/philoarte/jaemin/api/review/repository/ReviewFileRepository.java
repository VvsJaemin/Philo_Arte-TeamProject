package philoarte.jaemin.api.review.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import philoarte.jaemin.api.review.domain.ReviewFile;
import philoarte.jaemin.api.review.domain.ReviewFileDto;

public interface ReviewFileRepository extends JpaRepository<ReviewFile, Long> {

    @Transactional
    @Modifying
    @Query("DELETE FROM ReviewFile a where a.reviewFileId = :reviewFileId")
    void reviewFileDelete(@Param("reviewFileId") Long reviewFileId);
}
