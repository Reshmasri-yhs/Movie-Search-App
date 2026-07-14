import { useState } from "react";
import "./Register.css";

function Register() {
    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [errors,setErrors] = useState({});
    const [userDetails, setUserDetails] = useState(null);
    const [Users,setUsers] = useState([]);
    
    function registerUser(event){
        event.preventDefault();

    const validationErrors = {};

        if(UserName.trim()===""){
            validationErrors.UserName ="Name is Required";
           
        }
        if (Phone.trim() === "") {
      validationErrors.Phone = "Phone number is required";
    } else {
      const phonePattern = /^[0-9]{10}$/;

      if (!phonePattern.test(Phone)) {
        validationErrors.Phone = "Phone number must be exactly 10 digits";
      }
    }
        if(Password.trim()===""){
            validationErrors.Password = "Password is required";
            
        }else{
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(Password)) {
        validationErrors.Password ="Password must be at least 8 characters and include uppercase, lowercase, a number, and a special character";
        }
        }
        //email validation
        //regex:regular expressions
        if(Email.trim()===""){
        validationErrors.Email = "Email is required";
        } else {    
        const emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!emailpattern.test(Email)){
         validationErrors.Email = "Enter a valid email";
        }
        }
        
     setErrors(validationErrors);

     if (Object.keys(validationErrors).length === 0) {

     const newUser = {
    userName: UserName,
    email: Email,
    phone: Phone,
    password: Password,
    };


     
      setUserDetails(newUser);
       
      setUsers([...Users, newUser]);
        
        
        console.log("Registration Successful",newUser)
        setUserName("");
        setEmail("");
        setPhone("");
        setPassword("");
    }}
    
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
            {errors.UserName && <p className="error">{errors.UserName}</p>}
            <br/>

             <input
          type="tel"
          placeholder="Enter phone number"
          value={Phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        {errors.Phone && <p className="error">{errors.Phone}</p>}

            <input
                type="password"
                placeholder="Enter password"
                value={Password}
                onChange={(event) => setPassword(event.target.value)}
            />
            {errors.Password && <p className="error">{errors.Password}</p>}

            <input 
                type = "Email"
                placeholder= "Enter Email"
                value={Email}
                onChange ={(e)=>setEmail(e.target.value)}
                />
                {errors.Email && <p className="error">{errors.Email}</p>}

            
            <button type="submit">Register</button>
            
            </form>
            {/*<h2>User details</h2>
            {userDetails && (
        <div className="user-details">
          <p>
            <b>Username:</b> {userDetails.userName}
          </p>
          <p>
            <b>Phone:</b> {userDetails.phone}
            </p>
          <p>
            <b>Email:</b> {userDetails.email}
          </p>
          <p>
            <b>Password:</b> {userDetails.password}
          </p>*/}
            {
            Users.length==0?(
            <h3>No Users Registered</h3> )
            : (
            <table border ="1">
            
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        
                        
                        
                    </tr>
                </thead>
                <tbody>
                    
                    {Users.map((user,index) =>(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.userName}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            
                        </tr>
                    ))}

                </tbody>
            </table>
            )}
            </div>
            
            
        
    );
  }
  



export default Register;
