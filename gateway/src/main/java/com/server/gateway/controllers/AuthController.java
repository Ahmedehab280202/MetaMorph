package com.server.gateway.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.gateway.models.User;
import com.server.gateway.repositories.UserRepository;
import com.server.gateway.services.JwtService;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository user_repo;

    @Autowired
    private BCryptPasswordEncoder pass_encoder; // mas2ol 3an elincription bta3 elpassword comparison ma3a elpassword
                                                // elplain text wel password elhashed
    // lazem a3raf elBCryptPasswordEncoder eno component 3andi 3shan a3raf a3mel
    // injection bas mesh lazem class gded

    @Autowired
    JwtService jwt_service;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> register(@RequestBody Map<String, String> body) {

        System.out.println(body);

        String username = body.get("username");
        String firstname = body.get("firstname");
        String lastname = body.get("lastname");
        String email = body.get("email");
        String password = body.get("password");
        String job = body.get("job");

        // Check for null values
        // if (username == null || firstname == null || lastname == null || email == null || password == null || job == null) {
        //     Map<String, String> errorResponse = new HashMap<>();
        //     errorResponse.put("error", "All fields are required");
        //     return ResponseEntity.badRequest().body(errorResponse);
        // }

        // Parse age and phonenumber to int
        int age;
        int phonenumber;
        try {
            age = Integer.parseInt(body.get("age"));
            phonenumber = Integer.parseInt(body.get("phonenumber"));
        } catch (NumberFormatException e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Age and phonenumber must be valid integers");
            return ResponseEntity.badRequest().body(errorResponse);
        }

        String passwordHashed = this.pass_encoder.encode(password);

        User user = new User();
        user.setUsername(username);
        user.setFirstname(firstname);
        user.setLastname(lastname);
        user.setEmail(email);
        user.setPassword(passwordHashed);
        user.setJob(job);
        user.setAge(age);
        user.setPhonenumber(phonenumber);

        this.user_repo.save(user);

        String token = this.jwt_service.generateToken(user.getId());
        Map<String, String> res = new HashMap<>();
        res.put("token", token);
        return ResponseEntity.status(HttpStatus.CREATED).body(res);
    }// bdal ma byrga3 eldata bta3et eluser hyrga3 token.

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public ResponseEntity login(@RequestBody Map<String, String> body) {

        // System.out.println("testing frontend data: "+body);

        String email = body.get("email");

        // User user = this.user_repo.findByusername(username).orElse(null);
        User user = this.user_repo.findByEmail(email).orElse(null);

        if (user == null) {
            return new ResponseEntity<>("Not Found", HttpStatus.NOT_FOUND);
        }

        String password = body.get("password");
        String hashedPassword = user.getPassword();
        boolean isMatched = this.pass_encoder.matches(password, hashedPassword);

        if (isMatched) {
            String token = this.jwt_service.generateToken(user.getId());
            Map res = new HashMap<>();
            res.put("token", token);
            res.put("firstName", user.getFirstname());
            res.put("lastName", user.getLastname());
            // res.put("firstName", user.getFirstName()); 
            // res.put("lastName", user.getLastName());
            // String guid = this.jwt_service.extractUUID(token);
            // res.put("guid", guid);badecode reltoken wbrga3 elguid

            return new ResponseEntity<>(res, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Not Found", HttpStatus.NOT_FOUND);
        }
    }
}
