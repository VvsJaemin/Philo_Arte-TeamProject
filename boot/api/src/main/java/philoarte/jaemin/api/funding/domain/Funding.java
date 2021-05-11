package philoarte.jaemin.api.funding.domain;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "fundings")
public class Funding {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "funding_id")
    private long fundingId;

    @Column(name = "funding_title")
    private String fundingTitle;

    @Column(name = "funding_content")
    private String fundingContent;

    @Column(name = "funding_money") // 사진 링크
    private String fundingMoney;

    @Column(name = "delievery_fee") //배송비
    private String delieveryFee;

    @Column(name = "funding_send") // 펀딩 상품 발송일
    private String fundingSend;

    @Column(name = "select_people")
    private String selectPeople;

    @Column(name = "supporter_id")
    private long supporterId;
}
