package philoarte.jaemin.api.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import philoarte.jaemin.api.user.domain.UserVo;


public interface UserRepository extends JpaRepository<UserVo, Long> {

    boolean existsByUsername(String username);

    UserVo findByUsername(String username);

    @Query(value="select username from users where username= :username and password= :password", nativeQuery = true )
    UserVo signin(@Param("username") String username, @Param("password") String password);

}
