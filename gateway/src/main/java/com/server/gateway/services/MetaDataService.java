package com.server.gateway.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.server.gateway.models.MetaData;
import com.server.gateway.models.User;
import com.server.gateway.repositories.MetaDataRepository;
import com.server.gateway.repositories.UserRepository;

@Service
public class MetaDataService {

    @Autowired
    MetaDataRepository meta_data_repo;

    @Autowired
    UserRepository user_repo;

    // public MetaData getFrontEndCode(String raw_data) {
    //     return meta_data_repo.findByDesignUrl(raw_data).orElse(null);
    // }

    public MetaData getDataById(Integer id) {
        return meta_data_repo.findById(id).orElse(null);
    }

    public MetaData store(MetaData data) {
        return meta_data_repo.save(data);
    }

    public void deleteMetaDataById(Integer id) {
        meta_data_repo.deleteById(id);
    }

    // public List<String> getRawDataByUserId(String userId) {
    //     // Find the user by ID
    //     Optional<User> optionalUser = user_repo.findById(userId);

    //     if (optionalUser.isPresent()) {
    //         // User found, retrieve associated MetaData
    //         List<MetaData> metaDataList = meta_data_repo.findByData_ownerId(userId);

    //         // Extract raw data from MetaData objects
    //         return metaDataList.stream()
    //                 .map(MetaData::getRaw_Data)
    //                 .toList();
    //     } else {
    //         // User not found, handle appropriately (e.g., throw exception or return empty
    //         // list)
    //         throw new IllegalArgumentException("User with ID " + userId + " not found");
    //     }
    // }
}
