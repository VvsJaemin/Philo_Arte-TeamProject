package philoarte.jaemin.api.resume.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;
import philoarte.jaemin.api.artist.domain.Artist;
import philoarte.jaemin.api.category.domain.Category;
import philoarte.jaemin.api.common.util.ModelMapperUtils;

import java.util.List;

@Data
@Component
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResumeDto {

    private Long resumeId;
    private String title;
    private String selfIntroduce;
    private String detail;
    private Category category;
    private Artist artist;
    private List<ResumeFileDto> resumeFiles;

    public static ResumeDto of(Resume resume) {
        ResumeDto resumeDto = ModelMapperUtils.getModelMapper().map(resume, ResumeDto.class);
        return resumeDto;
    }

}