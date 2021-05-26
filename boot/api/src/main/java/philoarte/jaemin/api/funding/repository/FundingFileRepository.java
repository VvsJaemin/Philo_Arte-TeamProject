package philoarte.jaemin.api.funding.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import philoarte.jaemin.api.funding.domain.FundingFile;

@Repository
public interface FundingFileRepository extends JpaRepository<FundingFile, Long>{
    @EntityGraph(attributePaths = {"funding"}, type = EntityGraph.EntityGraphType.FETCH)
    @Query("SELECT f FROM FundingFile f WHERE f.funding.fundingId = :fundingId")
    List<FundingFile> getFileByFundingId(@Param("fundingId") Long id);

    @Transactional
    @Modifying
    @Query("DELETE FROM FundingFile f where f.fundingFileId = :fundingFileId")
    void fileDelete(@Param("fundingFileId") Long fundingFileId);
}
