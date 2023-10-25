import { useState } from "react";
import "./Form.css";

const Forms = () => {
  const [Name, setName] = useState("");
  const [FullName, setFullname] = useState();

  const [Pass, setPass] = useState();
  const [DisplayPass, setDisplayPass] = useState();

  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const ipPassword = (event) => {
    console.log(event.target.value);
    setPass(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setFullname(Name);
    setDisplayPass(Pass);
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <div>
          <h1>React Forms 👨‍💻🤙</h1>
          <h1>
            Hello {FullName}
            {DisplayPass} 👨‍💻🙏
          </h1>

          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={inputEvent}
            value={Name}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={ipPassword}
            value={Pass}
          />

          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
