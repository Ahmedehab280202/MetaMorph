package com.server.gateway.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.server.gateway.models.MetaData;

import java.util.List;
import java.util.Optional;


@Repository
public interface MetaDataRepository extends JpaRepository<MetaData,Integer>{
    public Optional<MetaData> findByDesignUrl(String design_url);

    // List<MetaData> findByData_ownerId(String ownerId);

}
