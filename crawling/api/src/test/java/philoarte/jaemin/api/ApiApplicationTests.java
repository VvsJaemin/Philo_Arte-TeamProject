package philoarte.jaemin.api;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import philoarte.jaemin.api.crawling.domain.Funding;
import philoarte.jaemin.api.crawling.repository.FundingCrawlingRepository;

import java.util.stream.IntStream;

@SpringBootTest

class ApiApplicationTests {

	@Autowired
	private FundingCrawlingRepository repo;

	@Test
	void contextLoads() {

		System.out.println("AAAA");
		System.out.println(repo);
	}

	@Test
	public void testInsertDummies() {

		IntStream.rangeClosed(1,100).forEach(i -> {

			Funding funding = new Funding();
			funding.setCategory("IT" + (i %10));
			funding.setAddress("Sample Address  " + i);
			funding.setTitle("Sample Title" + i);

			repo.save(funding);

		});



	}

}
