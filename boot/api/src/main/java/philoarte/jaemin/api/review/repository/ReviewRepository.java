package philoarte.jaemin.api.review.repository;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import philoarte.jaemin.api.review.domain.Review;
import philoarte.jaemin.api.review.domain.ReviewDto;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    @Query("select a from Review a order by a.reviewId desc")
    List<Review> findAll();

    @Query("select a from Review a group by a order by a.reviewId desc")
    Page<Review> allDataPaging(Pageable pageable);

    @Modifying
    @Query("Update Review a set a.content = :content, a.comment =:comment where a.reviewId = :reviewId ")
    int reviewUpdate(@Param("reviewId") Long reviewId, @Param("content") String content, @Param("comment") String comment);

}
