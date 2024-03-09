package com.server.gateway.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.server.gateway.models.MetaData;

@Repository
public interface MetaDataRepository extends JpaRepository<MetaData,Integer>{
    
}
