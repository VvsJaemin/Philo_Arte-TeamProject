package philoarte.jaemin.api.security.config;

import lombok.RequiredArgsConstructor;
import philoarte.jaemin.api.security.domain.SecurityProvider;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

// 인터셉터 생성
@Configuration
@EnableWebSecurity // boot - security 결합하는 어노테이션
@RequiredArgsConstructor
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private final SecurityProvider provider;

    @Bean // 인터셉터
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public ModelMapper modelMapper() { // hashmap을 json으로 변환

        return new ModelMapper();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable(); // 먼저 csrf 사용 불가 설정
        //sessionCre...-> 시큐리티가 생성하지도 않고 기존 것을 사용하지도 않음(JWT 토큰 방식)
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.authorizeRequests() // 시큐리티 처리에 HttpServletRequest를 이용
                .antMatchers("/users/signin").permitAll() // 특정경로 지정
                .antMatchers("/users/signup").permitAll()
                .antMatchers("/users/findAll").permitAll()
                .antMatchers("/h2-console/**/**").permitAll()
                .anyRequest().authenticated();
        http.exceptionHandling().accessDeniedPage("/login");
        http.apply(new SecurityConfig(provider));
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring()
                .antMatchers(HttpMethod.OPTIONS, "/*/**") // 모든 곳에서 접속 가능(시큐리티가 무시)
                .antMatchers("/", "/h2-console/**");
    }
}
