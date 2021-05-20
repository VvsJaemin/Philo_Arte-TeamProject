package philoarte.jaemin.api.review.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import philoarte.jaemin.api.review.domain.Reply;
import philoarte.jaemin.api.review.domain.Review;

import java.util.List;

public interface ReplyRepository extends JpaRepository<Reply, Long> {
    @Query("select a from Reply a order by a.replyId desc")
    List<Reply> replyFindAll();

    @Modifying
    @Query("Update Reply a set a.text = :text where a.replyId = :replyId")
    int replyUpdate(@Param("replyId") Long replyId, @Param("text") String text);

    @Transactional
    @Modifying
    @Query("DELETE FROM Reply a where a.replyId = :replyId")
    void replyDelete(@Param("replyId") Long replyId);

}
