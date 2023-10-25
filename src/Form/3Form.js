import { useState } from "react";
import "./Form.css";

const ForminDetails = () => {
  const [Name, setFullName] = useState({
    fName: "",
    pass: "",
    email: "",
    num:" "
  });

  const handleSubmit = (Event) => {
    Event.preventDefault();
    alert("Form Submitted Succesfully");
  };

  const handleChange = (Event) => {
    console.log(Event.target.value);
    console.log(Event.target.name);
    const name = Event.target.name;
    const value = Event.target.value;

    setFullName((preValue) => {
      //  console.log(prevalue)
      if (name === "fName") {
        return {
          fName: value,
          pass: preValue.pass,
          email: preValue.email,
          num:preValue.num

        };
      } else if (name === "pass") {
        return {
          fName: preValue.fName,
          pass: value,
          email: preValue.email,
          num:preValue.num

        };
      } else if (name === "email") {
        return {
          fName: preValue.fName,
          pass: preValue.pass,
          email: value,
          num:preValue.num
        };
      } else if (name === "Num"){
        return{
          fName:preValue.fName,
          pass:preValue.pass,
          email:preValue.email,
          num:value
        }
      }
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <div>
          <h1>Welcome 👨‍💻</h1>
          <h1>{Name.fName}</h1>
          <input
            type="text"
            placeholder="Please Enter Your Name"
            onChange={handleChange}
            name="fName"
            value={Name.fName}
          />

          <input
            type="password"
            placeholder="Please Enter Your Password"
            onChange={handleChange}
            name="pass"
            value={Name.pass}
          />

          <input
            type="email"
            placeholder="Please Enter Your Email ID"
            onChange={handleChange}
            name="email"
            value={Name.email}
          />
          <input type="number" placeholder="Please Enter Your Number" onChange={handleChange} name="Num" value={Name.num} />

          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
};

export default ForminDetails;
