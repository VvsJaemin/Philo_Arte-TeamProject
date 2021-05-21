package philoarte.jaemin.api;

import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.test.annotation.Commit;
import org.springframework.transaction.annotation.Transactional;
import philoarte.jaemin.api.art.domain.Art;
import philoarte.jaemin.api.artist.domain.Artist;
import philoarte.jaemin.api.review.domain.Review;
import philoarte.jaemin.api.review.repository.ReviewRepository;

import java.util.Arrays;
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


    @Transactional
    @Test
    public void reviewRead(){
        Optional<Review> review = reviewRepository.findById(1L);

        review.ifPresent(selectReview->{
            System.out.println("review : " + selectReview.getArtist());
        });
    }

    @Test
    public void testReadWithWriter(){
        Object result = reviewRepository.getBoardWithWriter(10L);
        Object [] arr = (Object[]) result;
        System.out.println("===========================");
        System.out.println(Arrays.toString(arr));
    }

    @Transactional
    @Test
    @Commit
    public void reviewUpdate(){

        reviewRepository.reviewUpdate(60L, "sfasasaf", "그냥해");
    }


    @Test
    public void reviewDelete(){

        reviewRepository.reviewDelete(33L);
    }

    @Test
    public void reviewWithReply(){
        List<Object[]> result = reviewRepository.getRevieWithReply(100L);
        for(Object[] arr : result){
            System.out.println(Arrays.toString(arr));
        }
    }

    @Test
    public void testWithReplyCount(){
        Pageable pageable = PageRequest.of(0,10, Sort.by("reviewId").descending());
        Page<Object[]> result = reviewRepository.getReviewWithReplyCount(pageable);
        result.get().forEach(row->{
            Object[] arr = (Object[]) row;
            System.out.println(Arrays.toString(arr));
        });
    }

    @Test
    public void testReviewByRead(){
        Object result = reviewRepository.getReviewByReviewId(30L);

        Object [] arr = (Object[]) result;

        System.out.println(Arrays.toString(arr));
    }


}
