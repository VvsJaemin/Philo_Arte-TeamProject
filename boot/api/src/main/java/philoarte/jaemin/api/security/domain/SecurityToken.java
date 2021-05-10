package philoarte.jaemin.api.security.domain;

import io.jsonwebtoken.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;


import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Log
public class SecurityToken {

    private final String token;

    private final String key;

    private int tokenExpirationMsec = 1800000; // 만료시간 30분

    private static final String AUTHORITIES_KEY = "role";

    public SecurityToken(String key) {
        this.token = createToken(); // 토큰 생산
        this.key = key;
    }

    public String createToken() {
        try {
            Map<String, Object> headers = new HashMap<>();
            headers.put("alg", "HS256"); // 알고리즘
            headers.put("typ", "JWT"); // 타입 ---> 헤더에 key, value(알고리즘, 토큰 타입)로 생성 -> json(jwt)
            // 알고리즘과 타입은 헤더에 담는다.

            //페이로드 생성
            Map<String, Object> payloads = new HashMap<>();
            payloads.put("data", "My first JWT");
            long exirationTime = 1000 * 60L * 60L * 2L; //토큰 유효시간 2시간

            Date ext = new Date();
            ext.setTime(ext.getTime() + exirationTime);

            return Jwts
                    .builder()
                    .setHeader(headers)
                    .setClaims(payloads)
                    .setSubject("user") // 용도
                    .setExpiration(ext)
                    .signWith(SignatureAlgorithm.HS256, key.getBytes())
                    .compact();

        } catch (SecurityException e) {
            log.info("Invalid JWT Signature");
        } catch (MalformedJwtException e) {
            log.info("Invalid JWT token");
        } catch (ExpiredJwtException e) {
            log.info("Expiration JWT token");
        } catch (UnsupportedJwtException e) {
            log.info("Unsupported JWT Signature");
        } catch (IllegalArgumentException e) {
            log.info("JWT token compact of hanler are invalid");
        }
        return null;
    }


}
