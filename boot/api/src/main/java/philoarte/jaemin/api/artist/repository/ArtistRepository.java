package philoarte.jaemin.api.artist.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import philoarte.jaemin.api.artist.domain.Artist;

import java.util.List;
import java.util.Optional;

@Repository
public interface ArtistRepository extends JpaRepository<Artist, Long> {
    boolean existsByName(String name);
    Optional<Artist> findByName(String name);

    @EntityGraph(attributePaths = {"roles"}, type = EntityGraph.EntityGraphType.FETCH)
    @Query("select a from Artist a order by a.artistId desc")
    List<Artist> getAllData();

    @EntityGraph(attributePaths = {"roles"}, type = EntityGraph.EntityGraphType.FETCH)
    @Query("select a from Artist a group by a  order by a.artistId desc")
    Page<Artist> getAllDataPaging(Pageable pageable);


    @Query(value = "select * from artists where username=:username and password=:password", nativeQuery = true)
    Artist signin(@Param("username") String username, @Param("password")String password);


    @Modifying
    @Query("Update FROM Artist a set a.password = :pw where a.artistId = :artistId")
    int updatePassword(@Param("artistId") Long artistId, @Param("pw") String pw);

    ;


}