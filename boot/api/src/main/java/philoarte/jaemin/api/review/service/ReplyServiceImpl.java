package philoarte.jaemin.api.review.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import philoarte.jaemin.api.review.domain.Reply;
import philoarte.jaemin.api.review.domain.ReplyDto;
import philoarte.jaemin.api.review.repository.ReplyRepository;

import java.util.List;
import java.util.Optional;
@Service
@RequiredArgsConstructor
public class ReplyServiceImpl implements ReplyService{

    private final ReplyRepository repository;

    @Override
    public String save(ReplyDto replyDto) {
        Reply replySave = dtoToEntity(replyDto);
        repository.save(replySave);
        return "success";
    }

    @Override
    public Optional<Reply> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public void replyDelete(Long replyId) {
        repository.replyDelete(replyId);
    }

    @Override
    public int replyUpdate(ReplyDto replyDto) {
        Reply replyUpdate = dtoToEntity(replyDto);
        return repository.replyUpdate(replyUpdate.getReplyId(), replyUpdate.getText());
    }

    @Override
    public List<Reply> replyFindAll() {
        return repository.replyFindAll();
    }
}
