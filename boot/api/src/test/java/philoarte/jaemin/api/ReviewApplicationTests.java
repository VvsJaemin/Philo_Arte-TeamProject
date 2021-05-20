package philoarte.jaemin.api;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.test.annotation.Commit;
import org.springframework.transaction.annotation.Transactional;
import philoarte.jaemin.api.art.domain.Art;
import philoarte.jaemin.api.artist.domain.Artist;
import philoarte.jaemin.api.review.domain.Review;
import philoarte.jaemin.api.review.domain.ReviewDto;
import philoarte.jaemin.api.review.repository.ReviewRepository;

import java.io.OutputStream;
import java.util.List;
import java.util.Optional;
import java.util.stream.IntStream;

@SpringBootTest
@Log4j2
public class ReviewApplicationTests {

    @Autowired
    private ReviewRepository reviewRepository;

    @Test
    public void test() {
        log.info("test");
    }

    @Test
    public void reviewSave() {
        IntStream.rangeClosed(1, 300).forEach(i->{
            long artId = (long)(Math.random()*10)+1;
            Art art = Art.builder().artId(artId).build();

            long artistId = (long)(Math.random()*100)+1;
            Artist artist = Artist.builder()
                    .artistId(artistId)
                    .build();

            Review review = Review.builder()
                    .art(art)
                    .artist(artist)
                    .title("Review Title"+i)
                    .content("Review Content"+i).build();
            reviewRepository.save(review);
        });

    }

    @Test
    public void reviewList(){
        List<Review> result = reviewRepository.reviewFindAll();

        for(Review review : result){
            System.out.println(review + " : " + review.getArt());
        }
    }

    @Test
    public void reviewRead(){
        Optional<Review> review = reviewRepository.findById(1L);

        review.ifPresent(selectReview->{
            System.out.println("review : " + selectReview);
        });
    }

    @Test
    public void reviewPage(){
        Pageable pageable = PageRequest.of(1, 10);

        reviewRepository.reviewPaging(pageable).get().forEach(review ->{
            log.info(review);
            System.out.println(review.getReviewId());
        });
    }


    @Transactional
    @Test
    @Commit
    public void reviewUpdate(){

        reviewRepository.reviewUpdate(60L, "그냥해");
    }


    @Test
    public void reviewDelete(){

        reviewRepository.reviewDelete(33L);
    }
}
