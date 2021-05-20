package philoarte.jaemin.api.review.service;

import philoarte.jaemin.api.common.util.ModelMapperUtils;
import philoarte.jaemin.api.review.domain.Reply;
import philoarte.jaemin.api.review.domain.ReplyDto;
import philoarte.jaemin.api.review.domain.Review;
import philoarte.jaemin.api.review.domain.ReviewDto;

import java.util.List;
import java.util.Optional;

public interface ReplyService {

    String save(ReplyDto replyDto);
    Optional<Reply> findById(Long replyId);
    void replyDelete(Long replyId);
    int replyUpdate(ReplyDto replyDto);
    List<Reply> replyFindAll();

    default Reply dtoToEntity(ReplyDto replyDto){
        Reply reply = ModelMapperUtils.getModelMapper().map(replyDto, Reply.class);

        return reply;
    }

    default ReplyDto entityToDto(Reply reply){
        ReplyDto replyDto = ModelMapperUtils.getModelMapper().map(reply, ReplyDto.class);


        return replyDto;
    }

}
