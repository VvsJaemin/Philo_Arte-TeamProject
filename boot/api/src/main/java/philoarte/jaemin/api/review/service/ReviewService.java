package philoarte.jaemin.api.review.service;

import philoarte.jaemin.api.art.domain.Art;
import philoarte.jaemin.api.artist.domain.Artist;
import philoarte.jaemin.api.review.domain.ReviewFile;
import philoarte.jaemin.api.review.domain.dto.PageRequestDto;
import philoarte.jaemin.api.review.domain.dto.PageResultDto;
import philoarte.jaemin.api.review.domain.Review;
import philoarte.jaemin.api.review.domain.dto.ReviewDto;
import philoarte.jaemin.api.review.domain.dto.ReviewFileDto;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public interface ReviewService {
    Long save(ReviewDto reviewDto);
    ReviewDto get(Long reviewId);
    void modify(ReviewDto reviewDto);
    void removeWithReplies(Long reviewId);
    PageResultDto<ReviewDto, Object[]> getList(PageRequestDto PageRequestDto);



    default Map<String, Object> dtoToEntity(ReviewDto reviewDto){
        Map<String, Object> entityMap = new HashMap<>();
        Artist artists = Artist.builder().artistId(reviewDto.getWriterId()).build();
        Art arts = Art.builder().artId(reviewDto.getArtId()).build();
        Review reviews = Review.builder()
                .reviewId(reviewDto.getReviewId())
                .title(reviewDto.getTitle())
                .content(reviewDto.getContent())
                .artist(artists)
                .art(arts)
                .build();
        entityMap.put("review", reviews);
        
        List<ReviewFileDto> imageDtoList = reviewDto.getReviewFileDtoList();
        
        if(imageDtoList!=null && imageDtoList.size() >0){
            List<ReviewFile> reviewImageList = imageDtoList.stream().map(reviewFileDto -> {
                ReviewFile reviewFile = ReviewFile.builder()
                        .path()
            })
        }
        return reviews;
    }

    default ReviewDto entityToDto(Review review, Artist artist, Long replyCount){
        ReviewDto reviewDto = ReviewDto.builder()
                .reviewId(review.getReviewId())
                .title(review.getTitle())
                .content(review.getContent())
                .regDate(review.getRegDate())
                .modDate(review.getModDate())
                .writerId(artist == null? 1L : artist.getArtistId())
                .writerName(artist == null ? "" :artist.getArtistName())
                .replyCount(replyCount.intValue())
                .build();

        return reviewDto;
    }

}
