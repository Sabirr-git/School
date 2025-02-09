import React from 'react';
import { FaUser, FaLock } from "react-icons/fa";

const TeacherLogin = ({ setIsTeacherLogin, setIsSignUp, handleInputChange, formData }) => {
  return (
    <div className="login-page card mx-auto my-5" style={{ maxWidth: '400px' }}>
      <div className="card-body">
        <h2 className="card-title text-center mb-4">Teacher Login</h2>
        <form>
          <div className="form-group">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Username"
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Password"
              required
            />
            <FaLock className="icon1" />
          </div>
          <button className="btn btn-primary btn-block" type="submit">Login</button>
        </form>
        <p className="text-center mt-3">Don't have an account? <button className="btn btn-link" onClick={() => setIsSignUp(true)}>Sign Up</button></p>
        <button className="btn btn-secondary btn-block" onClick={() => setIsTeacherLogin(false)}>Back to Home</button>
      </div>
    </div>
  );
};

export default TeacherLogin;