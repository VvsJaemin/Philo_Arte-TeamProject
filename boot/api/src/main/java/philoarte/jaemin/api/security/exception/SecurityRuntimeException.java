package philoarte.jaemin.api.security.exception;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public class SecurityRuntimeException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    private final String message;
    private final HttpStatus httpStatus;


}
