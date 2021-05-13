package philoarte.jaemin.api.crawling.service;

import philoarte.jaemin.api.common.domain.Crawler;
import philoarte.jaemin.api.common.service.AbstractService;
import philoarte.jaemin.api.common.service.CrawlerServiceImpl;
import philoarte.jaemin.api.crawling.domain.Funding;
import philoarte.jaemin.api.crawling.repository.FundingCrawlingRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.awt.print.Pageable;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Lazy
@Log
public class FundingCrawlingServiceImpl extends AbstractService<Funding> implements FundingCrawlingService {

    private final FundingCrawlingRepository fundingRepository;

    @Override
    public List<Funding> fundFindAll() {
        return null;
    }

    @Override
    public void crawlingHome() {

    }

    @Override
    public List<Funding> saveAll(Crawler crawler) throws IOException {

        Document document = CrawlerServiceImpl.connectUrl(crawler.getUrl());
        fundingRepository.deleteAll();

        Elements elements = document.select(crawler.getCssQuery());

        List<Funding> list = new ArrayList<>();

        for (int i = 0; i < elements.size(); i++) {
            Funding funding = new Funding();
            funding.setTitle(elements.get(i).text());
            funding.setAddress(elements.get(i).attr("href"));
            funding.setCategory(crawler.getCategory());
            list.add(funding);
            fundingRepository.save(funding);
        }

        return list;
    }

    @Override
    public Page<Funding> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Optional<Funding> findById(String tumblebuckId) {
        return Optional.empty();
    }

    @Override
    public void OptionalInit(String tumblebuckId) {

    }

    @Override
    public Long save(Funding funding) {
        return (fundingRepository.save(funding)!=null) ? 1L:0L;
    }

    @Override
    public Optional<Funding> findById(long id) {
        return Optional.empty();
    }

    @Override
    public Page<Funding> findAll(org.springframework.data.domain.Pageable pageable) {
        return null;
    }

    @Override
    public int count() {
        return 0;
    }

    @Override
    public Optional<Funding> getOne(long id) {
        return Optional.empty();
    }

    @Override
    public Long delete(Funding funding) {
        return null;
    }

    @Override
    public Boolean existsById(long id) {
        return null;
    }

    @Override
    public void deleteById(long id) {

    }
}
