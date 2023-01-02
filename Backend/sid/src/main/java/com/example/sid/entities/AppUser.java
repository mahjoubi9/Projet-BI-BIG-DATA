package com.example.sid.entities;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigInteger;
import java.util.*;


@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Document(collection = "AppUser")
public class AppUser {
    @Id
    private ObjectId _id;
    private String username ;
    private String password ;
    private boolean actived = true ;
    @DBRef
    private List<AppRole> roles = new ArrayList<>();
}
