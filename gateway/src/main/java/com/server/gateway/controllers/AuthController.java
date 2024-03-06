package com.server.gateway.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.gateway.models.User;
import com.server.gateway.repositories.UserRepository;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository user_repo;

    @Autowired
    private BCryptPasswordEncoder pass_encoder; //mas2ol 3an elincription bta3 elpassword comparison ma3a elpassword elplain text wel password elhashed
    //lazem a3raf elBCryptPasswordEncoder eno component 3andi 3shan a3raf a3mel injection bas mesh lazem class gded


    @PostMapping("/register")
    public ResponseEntity register(@RequestBody Map<String,String> body){
        String username = body.get("username");
        String password = body.get("password");
        String passwordHashed = this.pass_encoder.encode(password);

        User user = new User();
        user.setusername(username);
        user.setPassword(passwordHashed);

        this.user_repo.save(user);
        return new ResponseEntity<>(user,HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody Map<String,String> body){
        String username = body.get("username"); 

        User user = this.user_repo.findByusername(username).orElse(null);
        if(user == null){
            return new ResponseEntity<>("Not Found",HttpStatus.NOT_FOUND);
        }

        String password = body.get("password"); 
        String hashedPassword = user.getPassword();
        boolean isMatched = this.pass_encoder.matches(password, hashedPassword);

        if(isMatched){
            return new ResponseEntity<>(user,HttpStatus.OK);
        }else{
            return new ResponseEntity<>("Not Found",HttpStatus.NOT_FOUND);
        }
    }
}
