package com.example.demo.Model.SignupController;

import com.example.demo.Model.Student.Student;
import com.example.demo.Model.Teacher.Teacher;
import com.example.demo.Model.Student.StudentRepository;
import com.example.demo.Model.Teacher.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class SignupController {

    @Autowired
    private TeacherRepository teacherRepository;

    @Autowired
    private StudentRepository studentRepository;

    @PostMapping("/teacher/signup")
    public String teacherSignup(@RequestBody Teacher teacher) {
        teacherRepository.save(teacher);
        return "Teacher signup successful for: " + teacher.getEmail();
    }

    @PostMapping("/student/signup")
    public String studentSignup(@RequestBody Student student) {
        studentRepository.save(student);
        return "Student signup successful for: " + student.getEmail();
    }
}
