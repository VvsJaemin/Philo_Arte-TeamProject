package shop.philoarte.api.qna.domain.dto;

import lombok.*;
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