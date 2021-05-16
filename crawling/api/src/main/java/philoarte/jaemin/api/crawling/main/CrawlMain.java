package philoarte.jaemin.api.crawling.main;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import philoarte.jaemin.api.crawling.domain.Review;

import java.io.*;
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
        String url = "https://news.naver.com/main/read.nhn?mode=LSD&mid=shm&sid1=100&oid=011&aid=0003910515&m_view=1&includeAllCount=true&m_url=%2Fcomment%2Fall.nhn%3FserviceId%3Dnews%26gno%3Dnews011%2C0003910515%26sort%3Dlikability";
        driver.get(url);
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
        }

        String filePath = "C:\\Users\\w\\Desktop\\philoarte\\workspace\\crawling\\review.csv";
        List<Review> list = new ArrayList<>();
        List<WebElement> el1 = driver.findElements(By.cssSelector(".u_cbox_nick"));
        List<WebElement> el2 = driver.findElements(By.cssSelector(".u_cbox_contents"));
        List<WebElement> el3 = driver.findElements(By.cssSelector(".u_cbox_cnt_recomm"));
        List<WebElement> el4 = driver.findElements(By.cssSelector(".u_cbox_cnt_unrecomm"));




        try {
            DataOutputStream fw = new DataOutputStream(new FileOutputStream(filePath, true));

            for (int i = 0; i < el1.size(); i++) {
                Review review = new Review();
                review.setWriter(el1.get(i).getText());
                review.setContent(el2.get(i).getText());
                review.setLikeCnt(el3.get(i).getText());
                review.setDislikeCnt(el4.get(i).getText());


                System.out.println(review.getWriter());
                System.out.println(review.getContent());
                System.out.println(review.getLikeCnt());
                System.out.println(review.getDislikeCnt());


                list.add(review);
            }
            if (list.isEmpty()) {
                System.out.println("크롤링 된 값이 없습니다. !");
            } else {
                for (Review f : list) {
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


