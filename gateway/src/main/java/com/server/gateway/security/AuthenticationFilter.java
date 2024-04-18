package com.server.gateway.security;

import java.io.IOException;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.server.gateway.models.User;
import com.server.gateway.repositories.UserRepository;
import com.server.gateway.services.JwtService;
import com.server.gateway.services.UserService;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class AuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private JwtService jwtservice;

    @Autowired
    private UserRepository user_repo;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        } // keda m3nah feh bearertoken ma7tot
        String jwt = authHeader.split(" ")[1];
        String uuid = this.jwtservice.extractUUID(jwt);
        if (uuid != null) {
            User user = this.user_repo.findById(uuid).orElse(null);
            if (user != null) {
                UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(user,
                        null, new ArrayList<>()); // bta5od 3 hagat, object eluser elgaybo men eldatabase,
                                                  // null->credentials, prevledges->Roles
                authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            }
        }
        filterChain.doFilter(request, response);

    }// dah el7aot feh ellogic -> eluser dah authenticated wala la2.
}

// 1)hnzwed filter felsecurity chain law jwt dah valid wala la2
// 2) lama bagy a3mel filter chain custommade ba3mel extend
// lelOncePerRequestFilter