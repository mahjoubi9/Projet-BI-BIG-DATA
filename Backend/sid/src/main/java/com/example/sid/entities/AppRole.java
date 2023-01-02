package com.example.sid.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigInteger;


@Data
@AllArgsConstructor @NoArgsConstructor @ToString
@Document(collection = "AppRole")
public class AppRole {
    @Id
    private ObjectId _id;
    private String roleName ;
}

