import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import TeacherLogin from './components/TeacherLogin';
import StudentLogin from './components/StudentLogin';
import SignUppage from './components/SignUppage';

function App() {
  const [currentPage, setCurrentPage] = useState("home"); // New single state to manage pages

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    firstName: '',  
    lastName: '',
    email: '',
    phone: '',
    gender: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  

  return (
    <div className="app-container container-fluid">
      {currentPage === "home" && (
        <Home
          setIsTeacherLogin={() => setCurrentPage("teacherLogin")}
          setIsStudentLogin={() => setCurrentPage("studentLogin")}
        />
      )}
      {currentPage === "teacherLogin" && (
        <TeacherLogin
          setIsTeacherLogin={() => setCurrentPage("home")}
          setIsSignUp={() => setCurrentPage("signUp")}
          handleInputChange={handleInputChange}
          formData={formData}
        />
      )}
      {currentPage === "studentLogin" && (
        <StudentLogin
          setIsStudentLogin={() => setCurrentPage("home")}
          setIsSignUp={() => setCurrentPage("signUp")}
          handleInputChange={handleInputChange}
          formData={formData}
        />
      )}
      {currentPage === "signUp" && (
        <SignUppage
          setIsSignUp={() => setCurrentPage("home")}
          handleInputChange={handleInputChange}
          formData={formData}
        />
      )}
    </div>
  );
}

export default App;
