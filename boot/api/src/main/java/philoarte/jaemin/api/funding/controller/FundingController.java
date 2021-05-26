package philoarte.jaemin.api.funding.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import philoarte.jaemin.api.funding.domain.FundingDto;
import philoarte.jaemin.api.funding.service.FundingServiceImpl;

@Log4j2
@RestController
@RequiredArgsConstructor
@Api(tags = "funding")
@RequestMapping("/funding")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FundingController {
    private final FundingServiceImpl service;

    @GetMapping("/{fundingId}")
    public ResponseEntity<FundingDto> getOneFundingById(@PathVariable("fundingId") Long fundingId){
        return ResponseEntity.ok(service.getFundingById(fundingId));
    }

    @PostMapping("/register")
    public ResponseEntity<String> save(@RequestBody FundingDto dto){
        return ResponseEntity.ok("등록을 성공했습니다."+service.save(dto));
    }

    @PostMapping("/totalregister")
    public ResponseEntity<String> totalsave(@RequestBody FundingDto dto){
        return ResponseEntity.ok("등록을 성공했습니다."+service.totalSave(dto));
    }
    @PutMapping("/edit/{fundingId}")
    public ResponseEntity<String> updateFunding(@PathVariable("fundingId") Long fundingId, @RequestBody FundingDto fundingdto){
    if(service.getFundingById(fundingId) == null){
        log.info("해당 글이 조회되지 않습니다.");
        ResponseEntity.badRequest().build();
    }
    return ResponseEntity.ok(service.save(fundingdto));
    }   
    @DeleteMapping("/{fundingId}")
    public ResponseEntity<String> deleteFunding(@PathVariable("fundingId")Long fundingId, @RequestBody FundingDto fundingdto){
        service.deleteById(fundingId);
        return ResponseEntity.ok("식제 성공");
    }
}

