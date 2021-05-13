package philoarte.jaemin.api.crawling.service;


import philoarte.jaemin.api.common.domain.Crawler;
import philoarte.jaemin.api.crawling.domain.Funding;
import org.springframework.data.domain.Page;

import java.awt.print.Pageable;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface FundingCrawlingService {

    public List<Funding> fundFindAll();

    public void crawlingHome();

    List<Funding> saveAll(Crawler crawler) throws IOException;

    Page<Funding> findAll(final Pageable pageable);

    public Optional<Funding> findById(String tumblebuckId);

    public void OptionalInit(String tumblebuckId);
}
