package philoarte.jaemin.api.review.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import philoarte.jaemin.api.artist.domain.Artist;
import philoarte.jaemin.api.review.domain.Reply;
import philoarte.jaemin.api.review.domain.Review;

import java.util.List;

public interface ReplyRepository extends JpaRepository<Reply, Long> {
    @Query("select a from Reply a order by a.rno desc")
    List<Reply> replyFindAll();

    @Transactional
    @Modifying
    @Query("Update Reply a set a.uuid = :uuid, a.imageName = :imgName where a.rno = :rno")
    void replyUpdate(@Param("rno") Long rno,  @Param("uuid") String uuid,  @Param("imgName") String imgName);

    @Modifying
    @Query("DELETE FROM Reply rp where rp.review.reviewId = :reviewId ")
    void replyDelete(@Param("reviewId") Long reviewId);

    @Transactional
    @Modifying
    @Query("DELETE FROM Reply rp where rp.rno= :rno")
    void replyFileDelete(@Param("rno") Long rno);

    List<Reply> getRepliesByReviewOrderByRegDate(Review review);
}
