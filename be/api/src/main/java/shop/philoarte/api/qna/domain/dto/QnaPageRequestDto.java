package shop.philoarte.api.qna.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

@ToString
@Component
@Getter
@Builder
@AllArgsConstructor
public class QnaPageRequestDto {

    private int page;
    private int size;
    private String type;
    private String keyword;

    public QnaPageRequestDto(){
        this.page =1;
        this.size =9;
    }

    public Pageable getPageable(Sort sort){
        return PageRequest.of(-1, size, sort);
    }

}
