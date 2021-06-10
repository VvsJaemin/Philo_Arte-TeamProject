package philoarte.jaemin.api.funding.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import philoarte.jaemin.api.funding.domain.Funding;

@Repository
public interface FundingRepository extends JpaRepository<Funding,Long>{
    @Query("SELECT f FROM Funding f ORDER BY f.fundingId asc")
    List<Funding> getAllFundings();
    @Query("SELECT f FROM Funding f WHERE f.fundingId = :fundingId")
    List<Funding> getOneFunding(Long id);
    
    @Query("SELECT f FROM Funding f WHERE f.title LIKE %:title%")
    List<Funding> searchFundingsByTitle(@Param("title") String titleWord);
    
    @Query("SELECT f FROM Funding f WHERE f.content LIKE %:index%")
    List<Funding> searchFundingByContent(@Param("index") String contentWord);
    
    @Query("SELECT f FROM Funding f WHERE f.hashtag LIKE %:hashtag%")
    List<Funding> searchFundingByHashtag(@Param("hashtag") String hashtagName);
 
   

    
    @EntityGraph(attributePaths = {"artist"}, type = EntityGraph.EntityGraphType.FETCH)
    @Query("SELECT f FROM Funding f WHERE f.artist.artistId = :artistId ")
    List<Funding> searchAllListByArtistId(@Param("artistId") Long i);
    
    @EntityGraph(attributePaths = {"artist"}, type = EntityGraph.EntityGraphType.FETCH)
    @Query("SELECT f.title,f.goalPrice,f.viewCnt,f.hashtag FROM Funding f WHERE f.artist.artistId = :artistId")
    List<Funding> searchFundingByArtistId(@Param("artistId") Long i);

    
  
    @Query("SELECT f FROM Funding f ORDER BY f.fundingId desc")
    Page<Funding> getRecent(Pageable pageable);

    @Query("SELECT f FROM Funding f WHERE f.fundingId = :fundingId")
    Page<Funding> getPageById(Pageable pageable,@Param("fundingId")Long id);

    @Query(value = "SELECT f FROM Funding f WHERE f.title LIKE %:title% OR f.content LIKE %:content% ORDER BY f.fundingId desc",
           countQuery =  "SELECT COUNT(f.fundingId) FROM Funding f WHERE f.title LIKE %:title% OR f.content LIKE %:content%")
    Page<Funding> searchIndex(Pageable pageable, @Param("title")String title,@Param("content") String content);
    
    @EntityGraph(attributePaths = {"artist"}, type = EntityGraph.EntityGraphType.FETCH)
    @Query("SELECT f FROM Funding f WHERE f.artist.artistId = :artistId ")
    Page<Funding> getPagebyArtistId(Pageable pageable, @Param("artistId")Long id);

    @EntityGraph(attributePaths = {"artist"}, type = EntityGraph.EntityGraphType.FETCH)
    @Query("SELECT f FROM Funding f WHERE f.artist.name = :name ")
    Page<Funding> getPageByartistName(Pageable pageable, @Param("name")String name);
}
