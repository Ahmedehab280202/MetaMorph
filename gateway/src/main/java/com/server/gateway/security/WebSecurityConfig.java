package com.server.gateway.security;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.server.gateway.security.AuthenticationFilter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig { // 25.

    @Autowired
    private AuthenticationFilter authentication_filter;

    @Bean
public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
    httpSecurity.csrf().disable()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .cors() // Enable CORS support
            .and()
            .authorizeRequests()
            .requestMatchers("/auth/**").permitAll()
            .anyRequest().authenticated()
            .and()
            .addFilterBefore(authentication_filter, UsernamePasswordAuthenticationFilter.class); 

    return httpSecurity.build();
}

    @Bean
    public BCryptPasswordEncoder pass_encoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.addAllowedOrigin("http://localhost:3000");
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS")); // Add the allowed
                                                                                                   // methods
        configuration.setAllowedHeaders(Arrays.asList("Content-Type", "Authorization")); // Add the allowed headers
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}

// leh 3mlna elfile dah lama b3raf 'spring-boot-starter-validation' dependency
// fel pom wagy ash8al ay controller hytla3ly error unauthorized leh ?
// 3lshan by default hya btapplay filter chians.
// fa hena h7ded elfilter chains elana 3yezha

// elbeans bst5demha 3shan a3raf methods wa3raf a3melaha injection gwa classes
// aw methods tania
// tab ba3mel keda ezay bst5dam -> @Configuration