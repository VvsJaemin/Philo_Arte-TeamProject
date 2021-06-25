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
public class QnaDto {

    private Long qnaId;

    private String title;
    private String content;

    private Long writerId;
    private String writerName;

    private int replyCount;

    private LocalDateTime regDate;
    private LocalDateTime modDate;
}
