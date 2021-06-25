package shop.philoarte.api.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import shop.philoarte.api.artist.domain.Artist;
import shop.philoarte.api.qna.domain.Qna;
import shop.philoarte.api.qna.repository.QnaRepository;

import java.util.stream.IntStream;

@SpringBootTest
public class QnaRepositoryTests {

    @Autowired
    private QnaRepository qnaRepository;

    @Test
    public void insertQna(){
        IntStream.rangeClosed(1,30).forEach(i->{
            Artist artist = Artist.builder()
                    .artistId(1L)
                    .build();

            Qna qna = Qna.builder()
                    .title("title" + i)
                    .content("content" + i)
                    .artist(artist)
                    .build();

            qnaRepository.save(qna);

        });
    }

}
