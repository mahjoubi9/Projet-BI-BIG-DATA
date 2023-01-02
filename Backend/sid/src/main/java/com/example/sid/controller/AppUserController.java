package com.example.sid.controller;
import com.example.sid.dao.AppRoleRepository;
import  com.example.sid.dao.AppUserRepository;
import com.example.sid.entities.AppUser;
import com.example.sid.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
//@CrossOrigin(origins = "http://192.168.98.39:8080")
public class AppUserController {
    @Autowired
    private AccountService accountService;
    @Autowired
    private AppUserRepository appUserRepository;
    @Autowired
    private AppRoleRepository   appRoleRepository;

   /* @PostMapping("/register")
    public AppUser register(@RequestBody UserForm userForm){
        System.out.println("********************************"
                +userForm.getUsername()+" "+userForm.getAdress()+" "+userForm.getPassword());
        return  accountService.saveUser(userForm);
    }*/
   @PostMapping("/updateUser")
   public AppUser updateUser(@RequestBody AppUser appUser){

       System.out.println(appUser.getUsername());
       return  appUserRepository.save(appUser);
   }
    @PostMapping("/login/{username}")
    public boolean login(@RequestBody String password,@PathVariable("username") String username){

        AppUser appUser1 = new AppUser();

        try {
            appUser1=appUserRepository.findByUsername(username);
            if(appUser1!=null){
                if(appUser1.getPassword().equals(password)){
                    System.out.println(appUser1.getPassword());
                    System.out.println(appUser1.getRoles().toArray());
                    System.out.println(appUser1.getUsername());
                    return true;
                }
            }else{
                return  false;
            }
        }catch(Exception e){
            System.out.println(e.getMessage());
        }

        return  false;
    }
    @PostMapping("/getuserbyusername/{username}")
    public AppUser getuserbyusername(@PathVariable("username") String username){
        AppUser appUser1 = new AppUser();

        appUser1=appUserRepository.findByUsername(username);

        System.out.println(appUser1.getUsername());

        return  appUser1;
    }
    @GetMapping(path="/getnametest",produces="application/json")
    public String getnametest(){
        return "hi redwane hi asmaa hi youssf";
    }
    @GetMapping(path="/getnametest2",produces="application/json")
    public List<AppUser> getnametest2(){
        return appUserRepository.findAll();
    }

}


