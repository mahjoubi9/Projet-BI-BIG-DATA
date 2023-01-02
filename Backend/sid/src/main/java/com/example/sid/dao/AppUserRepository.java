package com.example.sid.dao;


import com.example.sid.entities.AppRole;
import java.util.Optional;

import com.example.sid.entities.AppUser;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AppUserRepository extends MongoRepository<AppUser, String> {
    AppUser findByUsername(String username);
    Boolean existsByUsername(String username);
}