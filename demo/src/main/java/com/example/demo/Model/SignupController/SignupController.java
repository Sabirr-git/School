//package com.example.demo.Model.SignupController;
//
//
//
//import com.example.demo.Model.Teacher.Teacher;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api")
//@CrossOrigin(origins = "*")
//public class SignupController {
//
//    @PostMapping("/signup")
//    public String signupUser(@RequestBody Teacher user) {
//        System.out.println("Received signup request: " + user.getFirstName() + " " + user.getLastName());
//        return "Teacher signup successful for: " + user.getEmail();
//}
//
//}
package com.example.demo.Model.SignupController;
import com.example.demo.Model.Student.Student;
import com.example.demo.Model.Teacher.Teacher;
import org.springframework.web.bind.annotation.*;
import java.io.FileWriter;
import java.io.IOException;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")

public class SignupController{

    @PostMapping ("/teacher/signup")
    public String TeacherSignup(@RequestBody Teacher teacher){
        System.out.println("First Name:"+teacher.getFirstName());
        System.out.println("First Name:"+teacher.getLastName());
        System.out.println("First Name:"+teacher.getEmail());
        System.out.println("First Name:"+teacher.getPassword());
 return "Teacher Signup Successfully for"+teacher.getEmail();
    }
    @PostMapping ("/student/signup")
    public String StudentSignup(@RequestBody Student student){
        System.out.println("First Name:"+student.getFirstName());
        System.out.println("First Name:"+student.getLastName());
        System.out.println("First Name:"+student.getEmail());
        System.out.println("First Name:"+student.getPassword());
        return "Teacher Signup Successfully for"+student.getEmail();
    }
}
