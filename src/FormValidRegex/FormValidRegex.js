import { useState } from "react";
import "./FormValidRegex.css";

const FormValidation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (Event) => {
    Event.preventDefault();
    if(valid()){
        alert("Form Succesfully Completed");
        setName("");
        setEmail("");
        setPassword("");
    }
  };

  const validateName = (name) => {
    const regex = /^[A-Za-z]{3,}$/;
    if( name.match(regex)){
        return true;
    }
    else {
        return false
    }
  };

  const ValidateEmail = (email)=>{
    const regex = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,6}$/;
    if(email.match(regex)){
        return true
    }else{
        return false
    }
  } 

  const validatepassword = (password)=>{
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,16}$/;
    if(password.match(regex)){
        return true
    }else {
        return false
    }
  }

  const valid = ()=>{
    setNameError("");
    setEmailError("");
    setPasswordError("");

    let check = true ;
    if(name === "" || !validateName(name)){
        setNameError("Invalid Name")
        return check = false;
    }
    if(email === "" || !ValidateEmail(email)){
        setEmailError("InValid Email")
         return check = false;
    }
    if(password ==="" || !validatepassword(password)){
        setPasswordError("Invalid Password")
        return false
    }
    return check;
  };

  return (
    <div className="background">
      <div className="container">
        <div className="screen">
          <div className="screenbody">
            <div className="screen-body-item left">
              <div className="app-title">
                <div>
                  Form <br /> Validation <br />
                </div>
              </div>
            </div>

            <div className="screen-body-item">
              <div className="app-form">
                <form onSubmit={handleSubmit}>
                  <div className="app-form-group">
                    <input
                      type="text"
                      className="app-form-control"
                      placeholder="Enter Your name"
                      value={name}
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                    />
                    <label>
                      <p style={{ color: "red", fontSize: "15px" }}>
                        {nameError}
                      </p>
                    </label>
                  </div>

                  <div class="app-form-group">
                    <input
                      type="email"
                      class="app-form-control"
                      placeholder="Enter Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <p style={{ color: "red", fontSize: "15px" }}>
                      {emailError}
                    </p>
                  </div>

                  <div class="app-form-group">
                    <input
                      type="password"
                      class="app-form-control"
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <p style={{ color: "red", fontSize: "15px" }}>
                      {passwordError}
                    </p>
                  </div>
                  <div>
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormValidation;
