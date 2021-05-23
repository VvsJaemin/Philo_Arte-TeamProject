package philoarte.jaemin.api.review.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

@Component
@Getter
@Builder
@AllArgsConstructor
public class PageRequestDto {

    private int page;
    private int size;
    private String type;
    private String keyword;

    public PageRequestDto(){
        this.page = 1;
        this.size = 10;

    }
    public Pageable getPage(Sort sort) {

        return PageRequest.of(page -1, size, sort);
    }
}
