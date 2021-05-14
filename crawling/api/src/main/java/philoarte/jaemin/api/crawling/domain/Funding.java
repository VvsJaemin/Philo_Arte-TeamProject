package philoarte.jaemin.api.crawling.domain;

import lombok.Data;

import javax.persistence.*;
@Data
@Entity
@Table(name = "fundings")
public class Funding {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "fuding_id")
    private Long fundingId;


    private String category;


    private String title;


    private String address;

    @Column(name = "funding_content")
    private String fundingContent;

    @Column(name = "funding_money")
    private String fundingMoney;

    @Column(name = "delievery_fee") //배송비
    private String delieveryFee;

    @Column(name = "funding_send") // 펀딩 상품 발송일
    private String fundingSend;

    @Column(name = "select_people") // 펀딩 상품 선택 인원
    private String selectPeople;

    @Column(name = "total_amount") // 펀딩 상품 총 수량
    private String totalAmount;

    @Column(name = "remain_amount") // 펀딩 상품 남은 수량
    private String remainAmount;

    public String toString(){
        return " , " + fundingContent + " , " + fundingMoney + " , " + delieveryFee +
                " , " + fundingSend + " , " + totalAmount + " , " + remainAmount + " \n";
    }
}