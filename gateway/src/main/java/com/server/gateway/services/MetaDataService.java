package com.server.gateway.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.gateway.models.MetaData;
import com.server.gateway.repositories.MetaDataRepository;

@Service
public class MetaDataService {
    
    @Autowired
    MetaDataRepository meta_data_repo;

    public MetaData getFrontEndCode(String Link){
        return meta_data_repo.findByDesignUrl(Link).orElse(null);
    }

    public MetaData getDataById(Integer id){
        return meta_data_repo.findById(id).orElse(null);
    }

    public MetaData createMetaData(MetaData data){
        return meta_data_repo.save(data);
    }

    public void deleteMetaDataById(Integer id){
        meta_data_repo.deleteById(id);
    }


}
