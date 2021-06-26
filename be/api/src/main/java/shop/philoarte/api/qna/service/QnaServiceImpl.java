package shop.philoarte.api.qna.service;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import shop.philoarte.api.qna.domain.dto.QnaDto;
import shop.philoarte.api.qna.repository.QnaRepository;
import shop.philoarte.api.review.domain.dto.PageRequestDto;
import shop.philoarte.api.review.domain.dto.PageResultDto;

@Service
@RequiredArgsConstructor
public class QnaServiceImpl implements QnaService{

    private final QnaRepository repository;

    @Override
    public Long save(QnaDto qnaDto) {
        return null;
    }

    @Override
    public QnaDto get(Long qnaId) {
        return null;
    }

    @Override
    public void modify(QnaDto qnaDto) {

    }

    @Override
    public void removeWithQnaReplies(Long qnaId) {

    }

    @Override
    public PageResultDto<QnaDto, Object[]> getList(PageRequestDto PageRequestDto) {
        return null;
    }
}
