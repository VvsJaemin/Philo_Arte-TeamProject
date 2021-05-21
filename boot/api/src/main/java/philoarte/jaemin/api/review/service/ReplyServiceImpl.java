package philoarte.jaemin.api.review.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import philoarte.jaemin.api.review.domain.Reply;
import philoarte.jaemin.api.review.domain.dto.ReplyDto;
import philoarte.jaemin.api.review.domain.Review;
import philoarte.jaemin.api.review.repository.ReplyRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReplyServiceImpl implements ReplyService {

    private final ReplyRepository repository;
    @Transactional
    @Override
    public String save(ReplyDto replyDto) {
        Reply replySave = dtoToEntity(replyDto);
        repository.save(replySave);
        return "Success Save";
    }

    @Override
    public List<ReplyDto> getList(Long reviewId) {
        List<Reply> result = repository.getRepliesByReviewOrderByReview(Review.builder().reviewId(reviewId).build());
        return result.stream().map(reply -> entityToDto(reply)).collect(Collectors.toList());
    }

    @Override
    public void modify(ReplyDto replyDto) {
        Reply reply = dtoToEntity(replyDto);
        repository.save(reply);
    }


    @Override
    public void remove(Long rno) {

        repository.deleteById(rno);
    }
}
