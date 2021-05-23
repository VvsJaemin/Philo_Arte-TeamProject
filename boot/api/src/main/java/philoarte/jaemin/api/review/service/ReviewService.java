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
import java.util.stream.Collectors;

public interface ReviewService {
    Long save(ReviewDto reviewDto);

    ReviewDto get(Long reviewId);

    void modify(ReviewDto reviewDto);

    void removeWithReplies(Long reviewId);

    PageResultDto<ReviewDto, Object[]> getList(PageRequestDto PageRequestDto);


    default Map<String, Object> dtoToEntity(ReviewDto reviewDto) {
        Map<String, Object> entityMap = new HashMap<>();
        Artist artists = Artist.builder().username(reviewDto.getWriterId()).build();
        Art arts = Art.builder().artId(reviewDto.getArtId()).build();
        Review review = Review.builder()
                .reviewId(reviewDto.getReviewId())
                .title(reviewDto.getTitle())
                .content(reviewDto.getContent())
                .artist(artists)
                .art(arts)
                .build();
        entityMap.put("review", review);

        List<ReviewFileDto> fileDtoList = reviewDto.getReviewFileDtoList();

        if (fileDtoList != null && fileDtoList.size() > 0) {
            List<ReviewFile> reviewFileList = fileDtoList.stream().map(reviewFileDto -> {
                ReviewFile reviewFile = ReviewFile.builder()
                        .reviewFileId(reviewFileDto.getReviewFileId())
                        .path(reviewFileDto.getPath())
                        .imgName(reviewFileDto.getImgName())
                        .uuid(reviewFileDto.getUuid())
                        .review(review)
                        .build();
                return reviewFile;
            }).collect(Collectors.toList());
            entityMap.put("fileList", reviewFileList);
        }
        return entityMap;
    }

    default ReviewDto entityToDto(Review review, Artist artist, Long replyCount, List<ReviewFile> reviewFiles) {
        ReviewDto reviewDto = ReviewDto.builder()
                .reviewId(review.getReviewId())
                .title(review.getTitle())
                .content(review.getContent())
                .regDate(review.getRegDate())
                .modDate(review.getModDate())
                .writerId(artist == null ? "" : artist.getUsername())
                .writerName(artist == null ? "" : artist.getArtistName())
                .replyCount(replyCount.intValue())
                .build();
        List<ReviewFileDto> reviewFileDtoList = reviewFiles.stream().map(reviewFile -> {
            return ReviewFileDto.builder()
                    .reviewFileId(reviewFile.getReviewFileId())
                    .imgName(reviewFile.getImgName())
                    .path(reviewFile.getPath())
                    .uuid(reviewFile.getUuid())
                    .build();
        }).collect(Collectors.toList());

        reviewDto.setReviewFileDtoList(reviewFileDtoList);
        reviewDto.setReplyCount(replyCount.intValue());
        return reviewDto;
    }

}
