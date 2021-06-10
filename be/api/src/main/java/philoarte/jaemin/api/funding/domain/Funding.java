package philoarte.jaemin.api.funding.domain;

import java.util.List;

import javax.persistence.*;

import org.springframework.data.domain.Page;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import philoarte.jaemin.api.artist.domain.Artist;
import philoarte.jaemin.api.common.domain.BaseEntity;
import philoarte.jaemin.api.common.util.ModelMapperUtils;
import philoarte.jaemin.api.artist.domain.Artist;
import philoarte.jaemin.api.common.domain.BaseEntity;
import philoarte.jaemin.api.common.util.ModelMapperUtils;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "fundings")
public class Funding extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "funding_id")
    private Long fundingId;
    @Column(name = "title")
    private String title;
    @Column(name = "content")
    private String content;
    @Column(name = "goal_price")
    private long goalPrice;
    @Column(name = "view_cnt")
    private long viewCnt;
    @Column(name = "hashtag")
    private String hashtag;


    public Funding(FundingDto dto) {
        this.title = dto.getTitle();
    }

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "artist_id")
    private Artist artist;


    public static Funding of(FundingDto fundingDto) {
        return ModelMapperUtils.getModelMapper().map(fundingDto, Funding.class);
    }

    public static Funding toDto(List<FundingDto> fundingDtos) {
        return ModelMapperUtils.getModelMapper().map(fundingDtos, Funding.class);
    }

    // Dto -> Entity(Page)
    public static Page<Funding> of(Page<FundingDto> sourcePage) {
        return sourcePage.map(Funding::of);
    }

    public void saveRequest(FundingDto requestDto) {
        this.title = requestDto.getTitle();
        this.content = requestDto.getContent();
        this.goalPrice = requestDto.getGoalPrice();
        this.hashtag = requestDto.getHashtag();
    }
}
