package com.example.sid.service;

import com.example.sid.entities.AppRole;
import com.example.sid.entities.AppUser;

import java.util.Collection;
import java.util.List;

public interface AccountService {
    //public AppUser saveUser(UserForm userForm);
    public AppRole save(AppRole role);
    public void addRoleToUser(AppUser appUser,String rolename);

}
