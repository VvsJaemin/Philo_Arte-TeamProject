package philoarte.jaemin.api.review.repository;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import philoarte.jaemin.api.review.domain.Review;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {

//    @Query("select a from Review a order by a.reviewId desc")
//    List<Review> reviewFindAll();
//
//    @Query("select a from Review a group by a order by a.reviewId desc")
//    Page<Review> reviewPaging(Pageable pageable);
    @Transactional
    @Modifying
    @Query("Update Review a set a.title = :title, a.content = :content where a.reviewId = :reviewId ")
    int reviewUpdate(@Param("reviewId") Long reviewId, @Param("title") String title, @Param("content") String content);

    @Transactional
    @Modifying
    @Query("DELETE FROM Review a where a.reviewId = :reviewId")
    void reviewDelete(@Param("reviewId") Long reviewId);


    @Query("SELECT re, w FROM Review re LEFT JOIN re.artist w where re.reviewId =:reviewId")
    Object getBoardWithWriter(@Param("reviewId") Long reviewId);

    @Query("SELECT re, rp FROM Review re LEFT JOIN Reply rp ON rp.review = re where re.reviewId =:reviewId")
    List<Object[]> getRevieWithReply(@Param("reviewId") Long reviewId);

    //w.artistId
    @Query(value = " SELECT re, w, count(rp) " +
            " FROM Review re " +
            " LEFT JOIN re.artist w "
            + " LEFT JOIN Reply rp ON rp.review= re " +
            " GROUP BY re ",
            countQuery = "SELECT count(re) FROM Review re")
    Page<Object[]> getReviewWithReplyCount(Pageable pageable);

    @Query(" SELECT re, w, count(rp) " +
            " FROM Review re LEFT JOIN re.artist w " +
            " LEFT OUTER JOIN Reply rp ON rp.review =re" +
            " where re.reviewId = :reviewId")
    Object getReviewByReviewId(@Param("reviewId") Long reviewId);


}
