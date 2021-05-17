package philoarte.jaemin.api.upload.service;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import philoarte.jaemin.api.upload.dto.PerformanceDTO;
import philoarte.jaemin.api.upload.dto.PicturesDTO;
import philoarte.jaemin.api.upload.entity.Performance;
import philoarte.jaemin.api.upload.entity.Pictures;
import philoarte.jaemin.api.upload.repository.PerformanceRepository;
import philoarte.jaemin.api.upload.repository.PicturesRepository;

import java.util.ArrayList;

@Service
@RequiredArgsConstructor
public class PerformanceServiceImpl implements PerformanceService{


    private final PerformanceRepository performanceRepository;
    private final PicturesRepository picturesRepository;

    @Transactional
    @Override
    public Long register(PerformanceDTO performanceDTO) {

        Performance performance = dtoToEntity(performanceDTO);

        //save
        performanceRepository.save(performance);

        ArrayList<PicturesDTO> pictures = performanceDTO.getPictures();

        if(pictures != null && pictures.size() > 0) {

            pictures.forEach(picturesDTO -> {
                Pictures pic = dtoToEntityPictures(picturesDTO);
                pic.confirmPerformance(performance);
                picturesRepository.save(pic);
            });
        }
        return performance.getPno();
    }
}

