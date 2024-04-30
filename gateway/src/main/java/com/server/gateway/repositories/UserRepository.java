package com.server.gateway.repositories;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.server.gateway.models.User;
import java.util.List;


@Repository
public interface UserRepository extends JpaRepository<User,String>{
    
    public Optional<User> findByusername(String username);

    public Optional<User> findByEmail(String email);
}
