package philoarte.jaemin.api;

import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;
import org.springframework.transaction.annotation.Transactional;
import philoarte.jaemin.api.art.domain.Art;
import philoarte.jaemin.api.artist.domain.Artist;
import philoarte.jaemin.api.review.domain.Review;
import philoarte.jaemin.api.review.domain.ReviewFile;
import philoarte.jaemin.api.review.repository.ReviewFileRepository;

import java.util.UUID;
import java.util.stream.IntStream;

@SpringBootTest
@Log4j2
public class ReviewFileApplicationTests {

    @Autowired
    private ReviewFileRepository repository;

    @Test
    public void reviewFileSave(){
        IntStream.rangeClosed(1, 100).forEach(i->{
            long reviewId = (long) (Math.random()*100)+1;
            Review review = Review.builder()
                    .reviewId(reviewId)
                    .build();
            ReviewFile reviewFile = ReviewFile.builder()
                    .uuid(UUID.randomUUID().toString())
                    .fileTitle("Review File title" +i)
                    .fileDetail("fileDetail" + i)
                    .fname("으아아아아").repImg(true)
                    .review(review)
                    .build();
            repository.save(reviewFile);

        });
    }


}
