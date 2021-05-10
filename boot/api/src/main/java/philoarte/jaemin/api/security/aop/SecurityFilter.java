package philoarte.jaemin.api.security.aop;

import lombok.RequiredArgsConstructor;
import lombok.val;
import philoarte.jaemin.api.security.domain.SecurityProvider;
import philoarte.jaemin.api.security.exception.SecurityRuntimeException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

// 커스텀 필터 생성
@RequiredArgsConstructor
public class SecurityFilter extends OncePerRequestFilter { // 어드바이스

    private final SecurityProvider provider;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        String token = provider.resolveToken(request);
        try{
            if(token != null && provider.vaildateToken(token)) {
                Authentication auth = provider.getAuthentication(token);
                SecurityContextHolder.getContext().setAuthentication(auth);
            }
        }catch (SecurityRuntimeException e){
            SecurityContextHolder.clearContext();
            response.sendError(e.getHttpStatus().value(), e.getMessage());
        }catch (Exception e){
            e.printStackTrace();
        } //concern (try~catch)
        filterChain.doFilter(request, response);

    }
}
