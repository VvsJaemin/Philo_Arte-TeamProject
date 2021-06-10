package philoarte.jaemin.api.funding.domain;
import java.util.List;
import java.util.stream.Collectors;

import philoarte.jaemin.api.common.util.ModelMapperUtils;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FundingFileDto {
    private Long pnum;

    private String uuid;

    private String fname;
    
    private String path;
    private Funding funding;


    public static List<FundingFileDto> filetoDto(List<FundingFile> fundingFile){
        
        return  fundingFile.stream()
        .map(p-> ModelMapperUtils.getModelMapper()
        .map(p, FundingFileDto.class))
        .collect(Collectors.toList());
    }
}
