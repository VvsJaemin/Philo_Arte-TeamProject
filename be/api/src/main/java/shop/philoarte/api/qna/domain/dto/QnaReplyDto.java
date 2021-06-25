package shop.philoarte.api.qna.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class QnaReplyDto {

    private Long reNo;

    private String text;

    private String replyer;

    private LocalDateTime regDate;
    private LocalDateTime modDate;


}
