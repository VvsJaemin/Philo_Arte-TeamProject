package philoarte.jaemin.api.funding.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import philoarte.jaemin.api.common.controller.AbstractController;
import philoarte.jaemin.api.funding.domain.Funding;
import philoarte.jaemin.api.funding.domain.FundingDto;
import philoarte.jaemin.api.funding.service.FundingServiceImpl;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value="/fundings")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Api(tags="fundings")
public class FundingController {

    private final FundingServiceImpl fundingService;
    private final ModelMapper modelMapper;

    @PostMapping("/register")
    public ResponseEntity<String> save (@ApiParam("Funding funding") @RequestBody FundingDto funding) {
        return ResponseEntity.ok(fundingService.save(modelMapper.map(funding, Funding.class)));
    }

    @GetMapping("/read/{id}")
    public ResponseEntity<Optional<Funding>> read(@PathVariable("id") long id){

        return ResponseEntity.ok(fundingService.findById(id));
    }


    @GetMapping("/funding_list")
    public ResponseEntity<List<Funding>> fundingList(){
        return ResponseEntity.ok(fundingService.findAll());
    }

    @PutMapping("/funding_modify/{fudingTitle}")
    public ResponseEntity<String> modify(@PathVariable("fundingTitle") String fundingTitle, @RequestBody FundingDto funding){

        return ResponseEntity.ok(fundingService.save(modelMapper.map(funding, Funding.class)));
    }

    @DeleteMapping("/funding_delete/{fudingId}")
    public ResponseEntity<String> delete(@PathVariable Long fundingId){

        fundingService.deleteById(fundingId);

        return ResponseEntity.ok("delete success!!");
    }



}
