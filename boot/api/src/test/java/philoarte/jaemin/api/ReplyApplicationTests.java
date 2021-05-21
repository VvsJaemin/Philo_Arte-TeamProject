package philoarte.jaemin.api;

import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.test.annotation.Commit;
import org.springframework.transaction.annotation.Transactional;
import philoarte.jaemin.api.artist.domain.Artist;
import philoarte.jaemin.api.review.domain.Reply;
import philoarte.jaemin.api.review.domain.Review;
import philoarte.jaemin.api.review.repository.ReplyRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.IntStream;

@SpringBootTest
@Log4j2
public class ReplyApplicationTests {

    @Autowired
    private ReplyRepository repository;

    @Test
    public void replySave() {
        IntStream.rangeClosed(1, 300).forEach(i -> {
            long reviewId = (long) (Math.random() * 100) + 1;
            Review review = Review.builder().reviewId(reviewId).build();

            Reply reply = Reply.builder()
                    .text("Reply" + i)
                    .review(review)
                    .replyer("guest")
                    .build();

            repository.save(reply);
        });
    }

    @Transactional
    @Test
    @Commit
    public void replyUpdate() {

        repository.replyUpdate(1L, "그냥해");
    }

    @Test
    public void replyDelete() {

        repository.replyDelete(30L);
    }

    @Test
    public void testListByBoard() {
        List<Reply> replyList = repository.getRepliesByReviewOrderByReview(Review.builder().reviewId(42L).build());
        replyList.forEach(reply -> System.out.println(reply));
    }


}
