package philoarte.jaemin.api.funding.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@RequiredArgsConstructor
public class FundingDto {

    private long fundingId;

    private String fundingTitle;

    private String fundingContent;

    private String fundingMoney;

    private String delieveryFee;

    private String fundingSend;

    private String selectPeople;

    private String totalAmount;

    private String remainundAmount;

    private long supporterId;
}
