package com.server.gateway.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.server.gateway.models.MetaData;
import com.server.gateway.models.User;

import java.util.List;
import java.util.Optional;


@Repository
public interface MetaDataRepository extends JpaRepository<MetaData,Integer>{

    List<MetaData> findByProjectName(String projectName);

    List<MetaData> findByDataOwner(User dataOwner);
    

}
