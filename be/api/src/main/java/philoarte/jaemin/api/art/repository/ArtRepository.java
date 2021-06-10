package philoarte.jaemin.api.art.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import philoarte.jaemin.api.art.domain.Art;

import java.util.List;

public interface ArtRepository extends JpaRepository<Art, Long> {

//    @Query("select a, rf, count(distinct r) from Art a " +
//            " left outer join ReviewFile rf on rf.review=a "+
//            "left outer join Review r on r.art = a group by a")
//    Page<Object[]> getListPage(Pageable pageable);
//
//    @Query("select a, rf, count(r)"
//            + " from Art a left outer join ReviewFile rf on rf.review = a "
//            + " left outer join Review r on r.art = a "
//            + " where a.artId =:artId group by rf")
//    List<Object[]> getArtWithAll(@Param("artId") Long artId);
}
