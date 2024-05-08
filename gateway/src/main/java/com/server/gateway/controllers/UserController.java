package com.server.gateway.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.server.gateway.models.User;
import com.server.gateway.services.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService user_service;

    @Autowired
    private BCryptPasswordEncoder pass_encoder;

    @GetMapping("{Userid}")
    public ResponseEntity getUserById(@PathVariable("Userid") String Userid) {
        try {
            User user_obj = this.user_service.getUserById(Userid);

            if (user_obj != null) {
                return new ResponseEntity<>(user_obj, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("user doesn't exist", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("error getting the user with this id" + Userid + e.getMessage());
        }
    }

    @DeleteMapping("{Userid}")
    public ResponseEntity deleteUserById(@PathVariable("Userid") String Userid) {
        try {
            User user_obj = this.user_service.getUserById(Userid);

            if (user_obj != null) {
                user_service.deleteById(Userid);
                return new ResponseEntity<>("User deleted successfully", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error deleting the User with this id" + Userid + e.getMessage());
        }
    }

    @PutMapping("{Userid}")
    public ResponseEntity updateUser(@RequestBody Map<String, String> body, @PathVariable String Userid) {
        try {
            User user_obj = this.user_service.getUserById(Userid);
            if (user_obj != null) {
                String username = body.get("username");
                String firstname = body.get("firstname");
                String lastname = body.get("lastname");
                String email = body.get("email");
                String password = body.get("password");
                String passwordHashed = this.pass_encoder.encode(password);

                user_obj.setFirstname(firstname);
                user_obj.setLastname(lastname);
                user_obj.setEmail(email);
                user_obj.setUsername(username);
                user_obj.setPassword(passwordHashed);

                user_service.createOrUpdateUser(user_obj);

                return new ResponseEntity<>("User updated successfully", HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>("User not Found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error updating the User data" + e.getMessage());
            
        }
    }

    

}
