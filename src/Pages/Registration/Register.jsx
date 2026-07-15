import { useState } from "react";
import "./Register.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {

  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");

  const [errors, setErrors] = useState({});
  const [Users, setUsers] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState("");
  const [Gender, setGender] = useState("");
  const [DOB, setDOB] = useState("");
  const [Terms, setTerms] = useState(false);

  function registerUser(event) {

    event.preventDefault();

    const validationErrors = {};
   

    if (UserName.trim() === "") {
      validationErrors.UserName = "Name is Required";
    }


    if (Phone.trim() === "") {

      validationErrors.Phone = "Phone number is required";

    } else {

      const phonePattern = /^[0-9]{10}$/;

      if (!phonePattern.test(Phone)) {
        validationErrors.Phone =
          "Phone number must be exactly 10 digits";
      }

    }


    if (Password.trim() === "") {

      validationErrors.Password = "Password is required";

    } else {

      const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

      if (!passwordPattern.test(Password)) {

        validationErrors.Password =
          "Password must contain uppercase, lowercase, number and special character";

      }

    }


    if (Email.trim() === "") {

      validationErrors.Email = "Email is required";

    } else {

      const emailPattern =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!emailPattern.test(Email)) {

        validationErrors.Email = "Enter a valid email";

      }

    }
      if (Gender.trim() === "") {

       validationErrors.Gender = "Please select gender";

      }
      if (DOB.trim() === "") {

      validationErrors.DOB = "Date of Birth is required";

      }


      if (!Terms) {

       validationErrors.Terms =
        "Please accept Terms and Conditions";

      }

    setErrors(validationErrors);


    if (Object.keys(validationErrors).length === 0) {

      const newUser = {

id: Date.now(),

userName: UserName,

email: Email,

phone: Phone,

password: Password,

gender: Gender,

dob: DOB,

termsAccepted: Terms

};

      setUsers([...Users, newUser]);

      setSuccess("Registration Successful 🎉");


      setUserName("");
      setEmail("");
      setPhone("");
      setPassword("");
       setGender("");
setDOB("");
setTerms(false);
    }

  }



  function resetForm() {

    setUserName("");
    setEmail("");
    setPhone("");
    setPassword("");

    setErrors({});
    setSuccess("");

  }



  return (

    <div className="register-container">


      <div className="register-box">

        <h1>
          Movie-Hub
        </h1>


        <form onSubmit={registerUser}>


          <input
            type="text"
            placeholder="Enter username"
            value={UserName}
            onChange={(event) =>
              setUserName(event.target.value)
            }
          />

          {
            errors.UserName &&
            <p className="error">
              {errors.UserName}
            </p>
          }



          <input
            type="tel"
            placeholder="Enter phone number"
            value={Phone}
            onChange={(event) =>
              setPhone(event.target.value)
            }
          />

          {
            errors.Phone &&
            <p className="error">
              {errors.Phone}
            </p>
          }
           <input
            type="email"
            placeholder="Enter Email"
            value={Email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />


          {
            errors.Email &&
            <p className="error">
              {errors.Email}
            </p>
          }


          <div className="password-wrapper">

            <input
              type={
                showPassword
                ?
                "text"
                :
                "password"
              }
              placeholder="Enter Password"
              value={Password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />


            <span
              className="eye-icon"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >

              {
                showPassword
                ?
                <FaEyeSlash />
                :
                <FaEye />
              }

            </span>

          </div>


          {
            errors.Password &&
            <p className="error">
              {errors.Password}
            </p>
          }

          <select
  value={Gender}
  onChange={(e)=>setGender(e.target.value)}
>

  <option value="">
    Select Gender
  </option>

  <option value="Male">
    Male
  </option>

  <option value="Female">
    Female
  </option>

  <option value="Other">
    Other
  </option>

</select>


{
  errors.Gender &&
  <p className="error">
    {errors.Gender}
  </p>
}



<input

  type="date"

  value={DOB}

  onChange={(e)=>setDOB(e.target.value)}

/>


{
  errors.DOB &&
  <p className="error">
    {errors.DOB}
  </p>
}



<label className="terms">


<input

  type="checkbox"

  checked={Terms}

  onChange={(e)=>
    setTerms(e.target.checked)
  }

/>


I accept Terms & Conditions

</label>


{
  errors.Terms &&
  <p className="error">
    {errors.Terms}
  </p>
}

          



          <button type="submit">
            Register
          </button>


          <button
            type="button"
            onClick={resetForm}
          >
            Reset
          </button>


        </form>



        {
          success &&
          <p className="success">
            {success}
          </p>
        }


      </div>



      <div className="users-container">


        {
          Users.map((user) => (

            <div
              className="user-card"
              key={user.id}
            >
              <p>
Gender: {user.gender}
</p>

<p>
DOB: {user.dob}
</p>

<p>
Terms Accepted:
{
user.termsAccepted
?
"Yes"
:
"No"
}
</p>
              <h3>
                {user.userName}
              </h3>

              <p>
                Email: {user.email}
              </p>

              <p>
                Phone: {user.phone}
              </p>

            </div>

          ))
        }


      </div>


    </div>

  );

}


export default Register;
