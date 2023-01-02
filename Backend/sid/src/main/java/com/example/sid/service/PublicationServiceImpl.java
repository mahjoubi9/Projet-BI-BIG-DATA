package com.example.sid.service;

import com.example.sid.dao.AppRoleRepository;
import com.example.sid.dao.AppUserRepository;
import com.example.sid.dao.PublicationRepository;
import com.example.sid.entities.AppRole;
import com.example.sid.entities.AppUser;
import com.example.sid.entities.Publication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PublicationServiceImpl implements PublicationService {

    @Autowired
    private AppUserRepository appUserRepository ;
    @Autowired
    private AppRoleRepository appRoleRepository;
    @Autowired
    private PublicationRepository publicationRepository;
//    private bCryptPasswordEncoder bCryptPasswordEncoder;

    //se constructor est equivalence a Autowired
    public PublicationServiceImpl(AppUserRepository appUserRepository, AppRoleRepository appRoleRepository) {
        this.appUserRepository = appUserRepository;
        this.appRoleRepository = appRoleRepository;
      //  this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    public Publication SavePublication(Publication publication) {
        return publicationRepository.save(publication);
    }



}
