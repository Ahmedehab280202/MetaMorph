package com.server.gateway.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception{
        httpSecurity.csrf().disable()
        .authorizeRequests()
        .anyRequest()
        .permitAll();
        return httpSecurity.build();
    }

    @Bean
    public BCryptPasswordEncoder pass_encoder(){
        return new BCryptPasswordEncoder();
    }
}


//leh 3mlna elfile dah lama b3raf 'spring-boot-starter-validation' dependency fel pom wagy ash8al ay controller hytla3ly error unauthorized leh ?
//3lshan by default hya btapplay filter chians.
//fa hena h7ded elfilter chains elana 3yezha

//elbeans bst5demha 3shan a3raf methods wa3raf a3melaha injection gwa classes aw methods tania
//tab ba3mel keda ezay bst5dam -> @Configuration