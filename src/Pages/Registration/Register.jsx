import { useState } from "react";
import "./Register.css";

function Register() {
    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [errors,setErrors] = useState("");
    const validationErrors = {};

    function registerUser(event){
        event.preventDefault()
        if(UserName.trim()===""){
            validationErrors.UserName ="Name is Required";
            return;
        }
        if(Password.trim()===""){
            validationErrors.password = "Password is required";
            return;
        }else{
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(Password)) {
        validationErrors.password ="Password must be at least 8 characters and include uppercase, lowercase, a number, and a special character";
        return;
        }
        }
        //email validation
        //regex:regular expressions
        if(Email.trim()===""){
        validationErrors.Email = "Email is required";
        } else {    
        const emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!emailpattern.test(Email)){
         alert("Enter a valid mail");
        return;
        }
        }
        
        
        console.log("Registration Successful")
        
    }
    return (
        <div className= "register-container">
            
            <h1>Registration Page</h1>
            <form onSubmit={registerUser}>
            <input
                type="text"
                placeholder="Enter username"
                value={UserName}
                onChange={(event) => setUserName(event.target.value)}
            />
            <br/>
            <input
                type="password"
                placeholder="Enter password"
                value={Password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <input 
                type = "email"
                placeholder= "Enter Email"
                value={Email}
                onChange ={(e)=>setEmail(e.target.value)}
                />
            
            <button>Register</button>
            
            </form>
            <h2>User details</h2>
            
            
            
            
        </div>
        

    );
}


export default Register;
