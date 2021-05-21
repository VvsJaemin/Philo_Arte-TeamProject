package philoarte.jaemin.api.review.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;
import philoarte.jaemin.api.review.domain.Review;

import javax.persistence.*;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

@Component
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReviewFileDto {

    private Long reviewFileId;
    private String uuid;
    private String fileTitle;
    private String fileDetail;
    private String fname;
    private Boolean repImg;
    private String path;
    private Review review;

    public String getImageURL(){
        try{
            return URLEncoder.encode(path+"/"+uuid+"_"+fname,"UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }

        return "";
    }

    public String getThumbnailURL(){
        try{
            return URLEncoder.encode(path+"/s_"+uuid+"_"+fname,"UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }

        return "";
    }
}
