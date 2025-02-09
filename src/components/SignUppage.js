
import React from 'react';

const SignUppage = ({ setIsSignUp, handleInputChange, formData = {}, errors = {} }) => {
  const SignupSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/teacher/signup', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      const data = await response.text(); // Backend sends plain text, not JSON
      console.log('Signup Success:', data);
      alert(data); // Show the success message from the backend
    } catch (error) {
      console.error('Error:', error);
      alert('Signup Failed! Please try again.');
    }
  };

 
  return (
    <div className="signup-page card mx-auto my-5" style={{ maxWidth: '600px' }}>
      <div className="card-body">
        <h2 className="card-title text-center mb-4">Sign Up</h2>
        <form onSubmit={SignupSubmit}>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName || ''} // Ensuring default value
              onChange={handleInputChange}
              className="form-control"
              required
            />
            {errors.firstName && <p className="text-danger">{errors.firstName}</p>}
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName || ''}
              onChange={handleInputChange}
              className="form-control"
              required
            />
            {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email" // Changed type to email for validation
              name="email"
              value={formData.email || ''}
              onChange={handleInputChange}
              className="form-control"
              required
            />
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password || ''}
              onChange={handleInputChange}
              className="form-control"
              required
            />
            {errors.password && <p className="text-danger">{errors.password}</p>}
          </div>
          <button className="btn btn-primary w-100 mt-3" type="submit" >Sign Up</button>
        </form>
        <button className="btn btn-secondary w-100 mt-3" onClick={() => setIsSignUp(false)}>Back to Home</button>
      </div>
    </div>
  );
};

export default SignUppage;
