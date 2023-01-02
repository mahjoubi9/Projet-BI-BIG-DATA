package com.example.sid.dao;


import com.example.sid.entities.Publication;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PublicationRepository extends MongoRepository<Publication, String> {
    //Publication findByDocument_Title(String document_title);
    //Boolean existsByDocument_Title(String Document_Title);
}