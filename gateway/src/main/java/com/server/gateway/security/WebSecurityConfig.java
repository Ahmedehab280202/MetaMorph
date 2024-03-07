package com.server.gateway.security;

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
                .authorizeRequests()
                .requestMatchers("/auth/**").permitAll()
                .anyRequest().authenticated()
                .and()
                .addFilterBefore(authentication_filter, UsernamePasswordAuthenticationFilter.class); // Assuming
                                                                                                     // UsernamePasswordAuthenticationFilter.class
                                                                                                     // is the class of
                                                                                                     // Spring's default
                                                                                                     // authentication
                                                                                                     // filter
        return httpSecurity.build();
    }

    @Bean
    public BCryptPasswordEncoder pass_encoder() {
        return new BCryptPasswordEncoder();
    }
}

// leh 3mlna elfile dah lama b3raf 'spring-boot-starter-validation' dependency
// fel pom wagy ash8al ay controller hytla3ly error unauthorized leh ?
// 3lshan by default hya btapplay filter chians.
// fa hena h7ded elfilter chains elana 3yezha

// elbeans bst5demha 3shan a3raf methods wa3raf a3melaha injection gwa classes
// aw methods tania
// tab ba3mel keda ezay bst5dam -> @Configuration