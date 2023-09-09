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

    const [success, setSuccess] = useState(false)


    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
  
      // Validate as the user types
      validateField();
    };

    const validateField = () => {
        const updatedErrors = { ...errors };

        updatedErrors.fullName = formData.fullName.trim() === '' ? 'Full name is required' : '';

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        updatedErrors.email = !emailRegex.test(formData.email) ? 'Email must be a valid address' : '';

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/;
        updatedErrors.password = !passwordRegex.test(formData.password)
        ? 'Password must contain at least 5 characters with uppercase, lowercase, and a number'
        : '';

        setErrors(updatedErrors);

        if (errors.fullName || errors.email || errors.password){
            setSuccess(false);
        }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform form submission here
      // You can add your logic to send the data to the server or perform further actions
      if (errors.fullName === "" && errors.email=== "" && errors.password=== ""){
            setSuccess(true);
      }
    };

    return (
        <div className="form-container">
          <h2>Register</h2>
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
              {errors.fullName && <span className="error">{errors.fullName}</span>}
            </div>
    
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
              {errors.email && <span className="error">{errors.email}</span>}
              
            </div>
     
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="true"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>


            {success && <p className="success">Registered successfully</p>}
            
            <button type="submit" onClick={()=>validateField()}>Sign Up</button>
          </form>
        </div>
      );
    };
    
    export default SignUpForm;