package philoarte.jaemin.api.crawling;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import philoarte.jaemin.api.category.domain.Category;
import philoarte.jaemin.api.review.domain.Review;

import java.io.DataOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class CrawlingMain {

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
        String url = "http://gift.kyobobook.co.kr/ht/gift/giftCategoryMain?ctgrId=000020";
        driver.get(url);
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {

        }


        String filePath = "C:\\Users\\w\\Desktop\\philoarte\\workspace\\crawling\\category.csv";
        List<Category> list = new ArrayList<>();
        List<WebElement> el1 = driver.findElements(By.cssSelector("ul.category-sub li a"));
//        List<WebElement> el2 = driver.findElements(By.cssSelector(".u_cbox_text_wrap"));


        try {
            DataOutputStream fw = new DataOutputStream(new FileOutputStream(filePath, true));

            for (int i = 0; i < el1.size(); i++) {

                Category category = Category.builder()
                        .categoryName(el1.get(i).getText())
//                        .content(el2.get(i).getText())
                        .build();
                System.out.println(category.getCategoryName());



                list.add(category);
            }
            if (list.isEmpty()) {
                System.out.println("크롤링 된 값이 없습니다. !");
            } else {
                for (Category f : list) {
                    byte[] arr = f.toString().getBytes("UTF-8");
                    fw.write(arr);

                }

                fw.flush();
                fw.close();


            }

        } catch (IOException | NumberFormatException e) {
            e.printStackTrace();
        }
    }
}
