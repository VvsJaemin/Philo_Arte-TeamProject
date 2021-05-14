package philoarte.jaemin.api.crawling.main;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import philoarte.jaemin.api.common.domain.Crawler;
import philoarte.jaemin.api.common.service.CrawlerServiceImpl;
import philoarte.jaemin.api.crawling.domain.Funding;
import philoarte.jaemin.api.crawling.service.FundingCrawlingServiceImpl;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

public class CrawlMain {
    public static final String WEB_DRIVER_ID = "webdriver.chrome.driver"; //드라이버 ID
    public static final String WEB_DRIVER_PATH = "C:\\Users\\w\\Desktop\\philoarte\\workspace\\crawling\\chromedriver.exe"; //드라이버 경로

    public static void main(String[] args) throws IOException {

        try {
            System.setProperty(WEB_DRIVER_ID, WEB_DRIVER_PATH);
        } catch (Exception e) {
            e.printStackTrace();
        }
        ChromeOptions options = new ChromeOptions();
        options.addArguments("headless");
        WebDriver driver = new ChromeDriver(options);
        String url = "https://www.wadiz.kr/web/campaign/detail/111574";
        driver.get(url);
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
        }

        String filePath = "C:\\Users\\w\\Desktop\\philoarte\\workspace\\crawling\\result.csv";
        List<Funding> list = new ArrayList<>();
        List<WebElement> el1 = driver.findElements(By.cssSelector("dd"));
        List<WebElement> el2 = driver.findElements(By.cssSelector("dt"));
        List<WebElement> el3 = driver.findElements(By.cssSelector("li em"));
        List<WebElement> el4 = driver.findElements(By.cssSelector("li.date"));
        List<WebElement> el5 = driver.findElements(By.cssSelector("p.reward-qty strong"));
        List<WebElement> el6 = driver.findElements(By.cssSelector("p.reward-qty em"));



        try {
            DataOutputStream fw = new DataOutputStream(new FileOutputStream(filePath, true));

            for (int i = 0; i < el1.size(); i++) {
                Funding funding = new Funding();
                funding.setFundingContent(el1.get(i).getText());
                funding.setFundingMoney(el2.get(i).getText());
                funding.setDelieveryFee(el3.get(i).getText());
                funding.setFundingSend(el4.get(i).getText());
                funding.setTotalAmount(el5.get(i).getText());
                funding.setRemainAmount(el6.get(i).getText());

                System.out.println(funding.getFundingContent());
                System.out.println(funding.getFundingMoney());
                System.out.println(funding.getDelieveryFee());
                System.out.println(funding.getFundingSend());
                System.out.println(funding.getTotalAmount());
                System.out.println(funding.getRemainAmount());

                list.add(funding);
            }
            if (list.isEmpty()) {
                System.out.println("크롤링 된 값이 없습니다. !");
            } else {
                for (Funding f : list) {
                    byte[] arr = f.toString().getBytes("UTF-8");
                    fw.write(arr);
                }
            }

            fw.flush();
            fw.close();

        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}


