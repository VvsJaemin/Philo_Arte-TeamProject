package philoarte.jaemin.api.funding.domain;

import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import philoarte.jaemin.api.artist.domain.Artist;

import javax.persistence.*;

@Data
@RequiredArgsConstructor
public class FundingDto {


    private Long fundingId;

    private String title;

    private String content;

    private String goalPrice;

    private int viewCnt;

    private Artist artist;
}
