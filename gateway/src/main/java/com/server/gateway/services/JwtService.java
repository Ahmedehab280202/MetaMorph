package com.server.gateway.services;

import java.util.Date;

import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;

@Service
public class JwtService {
    
    private String jwtSecret;
    private Algorithm algorithm;
    private long validity;

    public JwtService(){
        this.jwtSecret = "THISISASECRET";
        this.algorithm = Algorithm.HMAC256(this.jwtSecret);
        this.validity = 1 * 24 * 60 * 60 * 1000; 
    }

    public String generateToken(String uuid){
        String token = JWT.create()
        .withSubject(uuid)
        .withExpiresAt(new Date(System.currentTimeMillis() + this.validity))
        .sign(this.algorithm);
        return token;
    }

    public String extractUUID(String token){
        JWTVerifier jwt_verifier = JWT.require(this.algorithm).build();
        DecodedJWT decoded_jwt = jwt_verifier.verify(token);
        return decoded_jwt.getSubject();
    }
}
