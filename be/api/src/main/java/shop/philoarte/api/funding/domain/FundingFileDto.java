package shop.philoarte.api.funding.domain;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import shop.philoarte.api.common.util.ModelMapperUtils;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@Component
@AllArgsConstructor
@NoArgsConstructor
public class FundingFileDto {
    
    private Long fundingFileId;

    private String uuid;

    private String fname;

    public static FundingFileDto of(FundingFile fundingFile) {
        FundingFileDto fundingFileDto = ModelMapperUtils.getModelMapper().map(fundingFile, FundingFileDto.class);
        return fundingFileDto;
    }
}
