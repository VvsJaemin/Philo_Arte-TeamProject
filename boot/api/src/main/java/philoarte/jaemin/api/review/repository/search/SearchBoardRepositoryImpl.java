//package philoarte.jaemin.api.review.repository.search;
//
//import com.querydsl.jpa.JPQLQuery;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.log4j.Log4j2;
//import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
//import org.springframework.stereotype.Repository;
//import philoarte.jaemin.api.review.domain.Review;
//@Log4j2
//public class SearchBoardRepositoryImpl extends QuerydslRepositorySupport implements SearchBoardRepository {
//
//    public SearchBoardRepositoryImpl(){
//        super(Review.class);
//    }
//
////    @Override
////    public Review search() {
////        log.info("search1");
////        QReview review = QReview.review;
////
////        JPQLQuery<Review> jpqlQuery = from(review);
////        jpqlQuery.select(review).where(review.reviewId.eq(1L))
////        return null;
////    }
//}
