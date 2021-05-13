package philoarte.jaemin.api.crawling.domain;

import lombok.Data;

import javax.persistence.*;
@Data
@Entity
public class Funding {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tumblebuckId;


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
        return " \n 펀딩번호 : "+ tumblebuckId+ " , 펀딩 내용 : "+fundingContent+", 펀딩 상품 금액 : "+fundingMoney+", 배송료 : "+delieveryFee+
                ", 펀딩 상품 발송일 : "+fundingSend+", 펀딩 상품 총 수량 : "+totalAmount+", 펀딩 상품 남은 수량 : "+remainAmount+" \n";
    }
}
