package philoarte.jaemin.api.review.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import philoarte.jaemin.api.artist.domain.Artist;
import philoarte.jaemin.api.review.domain.dto.PageRequestDto;
import philoarte.jaemin.api.review.domain.dto.PageResultDto;
import philoarte.jaemin.api.review.domain.Review;
import philoarte.jaemin.api.review.domain.dto.ReviewDto;
import philoarte.jaemin.api.review.repository.ReplyRepository;
import philoarte.jaemin.api.review.repository.ReviewRepository;

import java.util.function.Function;

@Log4j2
@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository repository;
    private final ReplyRepository replyRepository;

    @Override
    public Long save(ReviewDto reviewDto) {
        log.info(reviewDto);
        Review review = dtoToEntity(reviewDto);
        repository.save(review);
        return review.getReviewId();
    }

    @Override
    public ReviewDto get(Long reviewId) {
        Object result = repository.getReviewByReviewId(reviewId);
        Object[] arr = (Object[]) result;
        return entityToDto((Review) arr[0], (Artist) arr[1], (Long) arr[2]);
    }

    @Transactional
    @Override
    public void modify(ReviewDto reviewDto) {
        Review review = repository.getOne(reviewDto.getReviewId());
        review.changeTitle(reviewDto.getTitle());
        review.changeContent(reviewDto.getContent());

        repository.save(review);

    }

    @Transactional
    @Override
    public void removeWithReplies(Long reviewId) {
        replyRepository.replyDelete(reviewId);
        repository.reviewDelete(reviewId);
    }

    @Override
    public PageResultDto<ReviewDto, Object[]> getList(PageRequestDto pageRequestDto) {
        log.info(pageRequestDto);

        Function<Object[], ReviewDto> fn = (en -> entityToDto((Review) en[0], (Artist) en[1], (Long) en[2]));

        Page<Object[]> result = repository.getReviewWithReplyCount(pageRequestDto.getPage(Sort.by("reviewId").descending()));

        return new PageResultDto<>(result, fn);
    }


}
