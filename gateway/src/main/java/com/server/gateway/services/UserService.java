package com.server.gateway.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.server.gateway.models.User;
import com.server.gateway.repositories.UserRepository;

@Service
public class UserService {
    
    @Autowired
    UserRepository user_repo;

    @Autowired
    JwtService jwt_Service;

    public List<User> getAllUsers(){
        return user_repo.findAll();
    } 

    public User getUserById(String id){
        return user_repo.findById(id).orElse(null);
    }

    public User getUserByToken(String token){
        String Userid = jwt_Service.extractUUID(token);
        User user = this.getUserById(Userid);
        return user;
    }

    public User createOrUpdateUser(User user){
        return user_repo.save(user);
    }

    public void deleteById(String id){
        user_repo.deleteById(id);
    }


}
