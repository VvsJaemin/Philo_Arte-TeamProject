package philoarte.jaemin.api.user.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;

import java.util.Arrays;

@RequiredArgsConstructor
@Getter
public enum Role implements GrantedAuthority {

    ADMIN("ROLE_ADMIN", "관리자 권한"),
    USER("ROLE_USER", "사용자 권한"),
    UNKNOWN("ROLE_UNKNOWN", "알수없는 권한");

    private final String code;
    private final String description;

    public static Role of(String code){
        return Arrays.stream(Role.values()).filter(i->i.getCode().equals(code)).findAny().orElse(UNKNOWN);
    }

    @Override
    public String getAuthority() {
        return name();
    }
}
