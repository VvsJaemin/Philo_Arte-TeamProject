package philoarte.jaemin.api.funding.domain;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import philoarte.jaemin.api.common.util.ModelMapperUtils;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import philoarte.jaemin.api.common.util.ModelMapperUtils;


@Component
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FundingDto {
    private Long fundingId;
    private String title;     
    private String content;
    private long goalPrice;
    private long artistId;
    private long viewCnt;
    private String hashtag;
    
    // Entity -> Dto
    public static FundingDto toDto(Funding funding){
        return ModelMapperUtils.getModelMapper().map(funding, FundingDto.class);
    }
    // Entity -> Dto(Page)
    public static Page<FundingDto> toDtoPage(Page<Funding> sourcePage){
        return sourcePage.map(FundingDto::toDto);
    }

    public static FundingDto toDtoList(List<Funding> sendIt) {
        return  ModelMapperUtils.getModelMapper().map(sendIt, FundingDto.class);
    }
    public static List<FundingDto> tlist(List<Funding> sendIt) {
        return  sendIt.stream().map(f -> ModelMapperUtils.getModelMapper().map(f, FundingDto.class)).collect(Collectors.toList());
    }
    private ArrayList<FundingFileDto> fundingFiles;
    
}
