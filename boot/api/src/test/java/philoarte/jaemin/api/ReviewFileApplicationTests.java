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
import philoarte.jaemin.api.review.repository.ReviewRepository;

import java.util.UUID;
import java.util.stream.IntStream;

@SpringBootTest
@Log4j2
public class ReviewFileApplicationTests {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private ReviewFileRepository reviewFileRepository;

    @Commit
    @Transactional
    @Test
    public void insertMovies(){
        IntStream.rangeClosed(1,100).forEach(i->{
            Review review = Review.builder().title("Review... " + i).build();

            System.out.println("------------------------------------------");

            reviewRepository.save(review);

            int count = (int) (Math.random()*5)+1;

            for(int j = 0; j<count; j++){
                ReviewFile reviewFile = ReviewFile.builder()
                        .uuid(UUID.randomUUID().toString())
                        .review(review)
                        .imgName("test"+j+".jpg").build();

                reviewFileRepository.save(reviewFile);
            }
        });
    }


}
