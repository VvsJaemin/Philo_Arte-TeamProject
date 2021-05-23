package philoarte.jaemin.api.review.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import philoarte.jaemin.api.artist.domain.Artist;
import philoarte.jaemin.api.review.domain.ReviewFile;
import philoarte.jaemin.api.review.domain.dto.PageRequestDto;
import philoarte.jaemin.api.review.domain.dto.PageResultDto;
import philoarte.jaemin.api.review.domain.Review;
import philoarte.jaemin.api.review.domain.dto.ReviewDto;
import philoarte.jaemin.api.review.repository.ReplyRepository;
import philoarte.jaemin.api.review.repository.ReviewFileRepository;
import philoarte.jaemin.api.review.repository.ReviewRepository;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

@Log4j2
@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository repository;
    private final ReplyRepository replyRepository;
    private final ReviewFileRepository reviewFileRepository;

    @Transactional
    @Override
    public Long save(ReviewDto reviewDto) {
        log.info(reviewDto);
        Map<String, Object> entityMap = dtoToEntity(reviewDto);
        Review review = (Review) entityMap.get("review");
        List<ReviewFile> reviewFileList = (List<ReviewFile>) entityMap.get("fileList");

        repository.save(review);

        reviewFileList.forEach(reviewFile -> {
            reviewFileRepository.save(reviewFile);
        });
        return review.getReviewId();
    }

    @Override // p.444 질문
    public ReviewDto get(Long reviewId) {
        List<Object[]> result = repository.getRevieWithReply(reviewId);
        Review review = (Review) result.get(0)[0];
        Artist artist = (Artist) result.get(0)[1];
        Long replyCount = (Long) result.get(0)[2];

        List<ReviewFile> reviewFileList = new ArrayList<>();

        result.forEach(arr -> {
            ReviewFile reviewFile = (ReviewFile) arr[3];
            reviewFileList.add(reviewFile);
        });


        return entityToDto(review, artist, replyCount, reviewFileList);
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

//        Pageable pageable = pageRequestDto.getPage(Sort.by("reviewId").descending());


        Function<Object[], ReviewDto> fn = (arr -> entityToDto(
                (Review) arr[0],
                (Artist) arr[1],
                (Long) arr[2],
                (List<ReviewFile>) (Arrays.asList((ReviewFile) arr[3]))));

        Page<Object[]> result = repository.searchPage(
                pageRequestDto.getType(),
                pageRequestDto.getKeyword(),
                pageRequestDto.getPage(Sort.by("reviewId").descending())

        );

        return new PageResultDto<>(result, fn);
    }


}
//
//        Function<Object[], ReviewDto> fn = (en -> entityToDto(
//                (Review) en[0],
//                (Artist) en[1],
//                (Long) en[2],
//                (List<ReviewFile>) (Arrays.asList((ReviewFile) en[3]))));
//
//        Page<Object[]> result = repository.getReviewWithReplyCount(
//                pageRequestDto.getPage(Sort.by("reviewId").descending()));
