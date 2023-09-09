import { useState } from "react";

const SignUpForm = () => {
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      password: '',
    });
  
    const [errors, setErrors] = useState({
      fullName: '',
      email: '',
      password: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
  
      // Validate as the user types
      validateField(name, value);
    };
  
    const validateField = (fieldName, value) => {
      const updatedErrors = { ...errors };
  
      switch (fieldName) {
        case 'fullName':
          updatedErrors.fullName = value.trim() === '' ? 'Full name is required' : '';
          break;
        case 'email':
          // Use a simple regex for email validation
          const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
          updatedErrors.email = !emailRegex.test(value) ? 'Email must be a valid address' : '';
          break;
        case 'password':
          const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/;
          updatedErrors.password = !passwordRegex.test(value)
            ? 'Password must contain at least 5 characters with uppercase, lowercase, and a number'
            : '';
          break;
        default:
          break;
      }
  
      setErrors(updatedErrors);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform form submission here
      // You can add your logic to send the data to the server or perform further actions
    };

    return (
        <div className="form-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
              <span className="error">{errors.fullName}</span>
            </div>
    
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
              <span className="error">{errors.email}</span>
            </div>
    
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <span className="error">{errors.password}</span>
            </div>
    
            <button type="submit">Sign Up</button>
          </form>
        </div>
      );
    };
    
    export default SignUpForm;