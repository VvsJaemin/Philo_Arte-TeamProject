package philoarte.jaemin.api.upload.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import philoarte.jaemin.api.upload.dto.PerformanceDTO;
import philoarte.jaemin.api.upload.service.PerformanceService;

@RestController
@Log4j2
@RequiredArgsConstructor
@RequestMapping("/performance")
@CrossOrigin(origins = "*")
public class PerformanceController {

    private final PerformanceService performanceService;

    @PostMapping("")
    public ResponseEntity<Long> register(
            @RequestBody PerformanceDTO performanceDTO){

        log.info("register.............................");
        log.info(performanceDTO);

        Long pno = performanceService.register(performanceDTO);

        return new ResponseEntity<>(pno, HttpStatus.CREATED);
    }

}
