package philoarte.jaemin.api.crawling.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Component
@Data
public class FundingDto {

    private Long fundingId;

    private String category;

    private String title;

    private String address;

    private String fundingContent;

    private String fundingMoney;

    private String delieveryFee;

    private String fundingSend;

    private String selectPeople;

    private String totalAmount;

    private String remainAmount;

}
