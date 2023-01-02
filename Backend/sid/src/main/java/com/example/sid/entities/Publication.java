package com.example.sid.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Document(collection = "Publication")
public class Publication {
    @Id
    private ObjectId _id;
    private String Document_Title ;
    private List<String> Authors ;
    private List<String> Universities  ;
    private Integer Citations  ;
    private String Affiliations  ;
    private String Publisher  ;
    private String DOI  ;
    private Integer Publication_Year ;
}
