package philoarte.jaemin.api.funding.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import philoarte.jaemin.api.funding.domain.Funding;
import philoarte.jaemin.api.funding.domain.FundingDto;
import philoarte.jaemin.api.funding.domain.FundingPageDto;
import philoarte.jaemin.api.funding.domain.PageRequestDto;
import philoarte.jaemin.api.funding.service.FundingServiceImpl;

@RestController
@RequiredArgsConstructor
@Api(tags = "funding")
@RequestMapping("/funding")
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
public class FundingPageController {
    private final FundingServiceImpl service;

    @GetMapping("/list")
    public ResponseEntity<FundingPageDto<FundingDto, Funding>> list(PageRequestDto requestDto){
        return ResponseEntity.ok(service.getList(requestDto));
    }
    @GetMapping("/list/{fundingId}")
    public ResponseEntity<FundingPageDto<FundingDto, Funding>>  getByFundingId(PageRequestDto requestDto,
                                        @PathVariable("fundingId") Long fundingId){
        return ResponseEntity.ok(service.getPageById(requestDto,fundingId));
    }
    @GetMapping("/list/artistfunding/{artistId}")
    public ResponseEntity<FundingPageDto<FundingDto, Funding>> getByArtistId(PageRequestDto requestDto,
                                        @PathVariable("artistId") Long artistId){
        return ResponseEntity.ok(service.getPageByArtistId(requestDto, artistId));
    }
    @GetMapping("/list/search")
    public ResponseEntity<FundingPageDto<FundingDto, Funding>> searchTCInPage(PageRequestDto requestDto,
                                        @RequestParam("keyword") String keyword){
        return ResponseEntity.ok(service.searchTitleAndContent(requestDto, keyword));
    }
    @GetMapping("/list/artist")
    public ResponseEntity<FundingPageDto<FundingDto, Funding>> searchArtistName(PageRequestDto requestDto,
                                        @RequestParam("artistName") String artistName){
        return ResponseEntity.ok(service.getByartistName(requestDto, artistName));
    }





    // @GetMapping("/listpage/searchsum")
    // public ResponseEntity<Page<FundingDto>> searchTCInPage(@RequestParam("keyword") String keyword, Pageable pageable){
    //     return ResponseEntity.ok(service.searchTitleAndContent(pageable, keyword));
    // }
    
}
