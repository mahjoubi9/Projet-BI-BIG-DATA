package com.example.sid.service;

import com.example.sid.dao.AppRoleRepository;
import com.example.sid.dao.AppUserRepository;
import com.example.sid.entities.AppRole;
import com.example.sid.entities.AppUser;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.List;

@Service
@Transactional
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AppUserRepository appUserRepository ;
    @Autowired
    private AppRoleRepository appRoleRepository;
//    private bCryptPasswordEncoder bCryptPasswordEncoder;

    //se constructor est equivalence a Autowired
    public AccountServiceImpl(AppUserRepository appUserRepository, AppRoleRepository appRoleRepository) {
        this.appUserRepository = appUserRepository;
        this.appRoleRepository = appRoleRepository;
      //  this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    public AppRole save(AppRole role) {
        return appRoleRepository.save(role);
    }
    @Override
    public void addRoleToUser(AppUser appUser, String rolename) {
       // AppUser appUser = appUserRepository.findByUsername(userForm.getUsername());
        AppRole appRole = appRoleRepository.findByRoleName(rolename);
        appUser.getRoles().add(appRole);
        appUserRepository.save(appUser);
        appRoleRepository.save(appRole);
    }
}
