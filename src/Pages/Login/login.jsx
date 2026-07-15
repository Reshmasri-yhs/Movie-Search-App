import './login.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {

  const navigate = useNavigate();

  const [userName,setUserName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [showPassword,setShowPassword] = useState(false);
  const [message,setMessage] = useState("");
  const [loading,setLoading] = useState(false);
  const [errors,setErrors] = useState({});


  const emailPattern =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


  function validateFields(){

    const newErrors = {};

    if(userName.trim()===""){
      newErrors.userName="Name / Username is required";
    }

    if(email.trim()===""){
      newErrors.email="Email is required";
    }
    else if(!emailPattern.test(email)){
      newErrors.email="Enter valid email";
    }

    if(password.trim()===""){
      newErrors.password="Password is required";
    }
    else if(password.length<8){
      newErrors.password="Password must contain minimum 8 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length===0;
  }


  function handleLogin(event){

    event.preventDefault();

    if(!validateFields()){
      setMessage("");
      return;
    }

    setLoading(true);
    setMessage("");

    setTimeout(()=>{

      if(
        userName==="Reshma" &&
        email==="reshma@gmail.com" &&
        password==="Reshmayhs@123"
      ){

        const loggedUser={
          userName,
          email
        };

        localStorage.setItem(
          "loggedUser",
          JSON.stringify(loggedUser)
        );

        setMessage("Login Successful 🎬");

        setTimeout(()=>{
          navigate("/");
        },1000);

      }
      else{

        setMessage("Invalid Username or Password ❌");

      }

      setLoading(false);

    },2000);

  }


  function handleClear(){

    setUserName("");
    setEmail("");
    setPassword("");
    setErrors({});
    setMessage("");
    setShowPassword(false);

  }


  function handleForgotPassword(){

    setMessage(
      "Password reset link will be sent to your email."
    );

  }


  return(

    <div className="login-container">

      <div className="login-box">

        <h1>
          Movie-Hub
        </h1>


        <form onSubmit={handleLogin}>


          <input
            type="text"
            placeholder="Enter Your Name"
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
          />

          {
            errors.userName &&
            <p className="field-error">
              {errors.userName}
            </p>
          }


          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          {
            errors.email &&
            <p className="field-error">
              {errors.email}
            </p>
          }


          <div className="password-wrapper">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <span
              className="eye-icon"
              onClick={()=>setShowPassword(!showPassword)}
            >
              {
                showPassword
                ?
                <FaEyeSlash/>
                :
                <FaEye/>
              }
            </span>

          </div>


          {
            errors.password &&
            <p className="field-error">
              {errors.password}
            </p>
          }


          <div className="button-row">

            <button
              className="login-btn"
              disabled={loading}
            >
              {
                loading
                ?
                "Logging in..."
                :
                "Login"
              }
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
              onClick={()=>navigate("/register")}
            >
              New user? Register
            </p>

          </div>


          {
            message &&
            <p className="message">
              {message}
            </p>
          }


        </form>

      </div>

    </div>

  );

}

export default Login;
