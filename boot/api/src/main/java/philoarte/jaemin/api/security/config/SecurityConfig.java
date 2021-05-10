package philoarte.jaemin.api.security.config;

import lombok.RequiredArgsConstructor;
import philoarte.jaemin.api.security.aop.SecurityFilter;
import philoarte.jaemin.api.security.domain.SecurityProvider;
import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

// 필터체인 정의 -> 필터 생성
@RequiredArgsConstructor
public class SecurityConfig extends SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> {

        private final SecurityProvider provider; // 사용 관계 (필터 - 프로바이더), 필터가 입구니깐 지키는 프로바이더를 생성

    @Override
    public void configure(HttpSecurity http) throws Exception {
        SecurityFilter filter = new SecurityFilter(provider);
        http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class); // 필터 들어가기전 먼저 실행 -p.686
    }
}
