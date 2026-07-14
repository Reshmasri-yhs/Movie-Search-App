import './login.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoggedin,setIsLoggedIn]=useState("");
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function validateFields() {
    const newErrors = {};

    if (userName.trim() === "") {
      newErrors.userName = "Name / Username is required.";
    }

    if (email.trim() === "") {
      newErrors.email = "Email is required.";
    } else if (!emailPattern.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (password.trim() === "") {
      newErrors.password = "Password is required.";
    } else if (password.length < 4) {
      newErrors.password = "Password must be at least 4 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleLoading() {
    if (!validateFields()) {
      setMessage("");
      return;
    }

    setLoading(true);
    setMessage("");

    setTimeout(() => {
      if (
        userName === "Reshma" &&
        email === "reshma@gmail.com" &&
        password === "Reshmayhs@123"
      ) {
        localStorage.setItem("loggedUser", userName);

        setMessage("Login Successful ");
         setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        setMessage("Invalid Username or Password ");
      }

      setLoading(false);
    }, 2000);
  }

  function handleClear() {
    setUserName("");
    setEmail("");
    setPassword("");
    setShowPassword(false);
    setMessage("");
    setErrors({});
  }

  

  function handleForgotPassword() {
    setMessage("A password reset link would be sent to your email.");
  }

  function handleRegisterNavigate() {
    setMessage("Redirecting to Register page...");
  }

  return (
    
      
        <div className="login-container">
          <div className="login-box">
            <h1>Movie-Hub</h1>

            <input
              type="text"
              placeholder="Enter Your Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            {errors.userName && (
              <p className="field-error">{errors.userName}</p>
            )}

            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="field-error">{errors.email}</p>}
             <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
              </div> 
            {errors.password && (
              <p className="field-error">{errors.password}</p>
            )}

            <button
              type="button"
              className="show-password-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide Password" : "Show Password"}
            </button>

            <div className="button-row">
              <button
                className="login-btn"
                onClick={handleLoading}
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              <button
                type="button"
                className="clear-btn"
                onClick={handleClear}
                disabled={loading}
              >
                Clear
              </button>
            </div>

            <div className="links-row">
              <button
                type="button"
                className="link-btn"
                onClick={handleForgotPassword}
              >
                Forgot Password?
              </button>

              <p
                
                className="register-link"
                onClick={() => navigate("/register")}>
                New user? Register
              </p>
            </div>

            {message && <p className="message">{message}</p>}
          </div>
        </div>
      
  );
}

export default Login;