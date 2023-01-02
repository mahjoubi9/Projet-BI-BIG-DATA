package com.example.sid.dao;


import java.util.Optional;

import com.example.sid.entities.AppRole;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface AppRoleRepository extends MongoRepository<AppRole, String> {
    public AppRole findByRoleName(String roleName);
}

