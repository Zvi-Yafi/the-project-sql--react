import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import getUser from "./GetUsers";

const Login = () => {





  const navigete = useNavigate();
  const [nameUser, setNameUser] = useState("");
  const [pass, setPass] = useState("");

  const ConfirmUser = () => {
    getUser(nameUser, pass).then((user) => {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("nameUser", nameUser);
        localStorage.setItem("passUser", pass);
        navigete("/home");
      } else {
        setNameUser("");
        setPass("");
        navigete("/home/login");
      }
    });
  };
  return (
    <>
    <div style={{
      border:'2px solid lightgrey',
      height:'300px'
      }}>
      <form>
        <div className="mb-3 mt-3">
          <label className="form-label">nameUser:</label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter your name"
            value={nameUser}
            onChange={(e) => setNameUser(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="number"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            ConfirmUser();
          }}
        >
          Submit
        </button>
      </form>
      </div>
    </>
  );
};
export default Login;
