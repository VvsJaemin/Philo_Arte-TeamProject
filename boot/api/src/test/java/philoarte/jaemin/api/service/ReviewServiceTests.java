package philoarte.jaemin.api.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;
import org.springframework.transaction.annotation.Transactional;
import philoarte.jaemin.api.review.domain.dto.PageRequestDto;
import philoarte.jaemin.api.review.domain.dto.PageResultDto;
import philoarte.jaemin.api.review.domain.dto.ReviewDto;
import philoarte.jaemin.api.review.service.ReviewServiceImpl;

@SpringBootTest
public class ReviewServiceTests {

    @Autowired
    ReviewServiceImpl service;

    @Test
    public void testGetList(){
        PageRequestDto pageRequestDto = new PageRequestDto(1,10);

        PageResultDto<ReviewDto, Object[]> result = service.getList(pageRequestDto);

//        //System.out.println(result);
//
//        System.out.println("===========================");
//        System.out.println(result.getDtoList());

        for(ReviewDto reviewDto : result.getDtoList()){
            System.out.println(reviewDto);
        }
    }

    @Test
    public void testGet(){
        Long reviewId = 30L;
        ReviewDto reviewDto = service.get(reviewId);

        System.out.println(reviewDto);
    }

    @Test
    public void testRemove(){
        Long reviewId = 20L;

        service.removeWithReplies(reviewId);
    }

    @Test
    public void testRegister(){
        ReviewDto dto = ReviewDto.builder()
                .title("test")
                .content("w")
                .artId(1L)
                .writerId(1L)
                .build();

        service.save(dto);
    }

    @Transactional
    @Test
    @Commit
    public void testModify(){
        ReviewDto reviewDto = ReviewDto.builder()
                .reviewId(52L)
                .title("변경")
                .content("내용 변경")
                .build();

        service.modify(reviewDto);
    }
}
