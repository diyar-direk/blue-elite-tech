import React from "react";
import "./login.css";

const Login = () => {
  function showPassword(e) {
    e.target.classList.toggle("fa-eye");
    const input = document.querySelector(
      `.login-container form.login .input input.pass`
    );
    input.type === "password"
      ? (input.type = "text")
      : (input.type = "password");
  }
  return (
    <>
      <main className=" center sub-page section-color">
        <div className="container center login-container">
          <form action="" className="login flex">
            <h1>Login</h1>
            <div className="profile-log">
              <div className="icon-background">
                <i className="fa-solid fa-user"></i>
              </div>
            </div>
            <div className="input-wrapper">
              <div className="input">
                <input type="text" placeholder="User name" />
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="input">
                <i
                  onClick={showPassword}
                  className="fa-regular password fa-eye-slash"
                ></i>
                <input
                  type="password"
                  className="pass"
                  placeholder="Password"
                />
                <i className="fa-solid fa-lock"></i>
              </div>
            </div>
            <button className="btn2 center">Submit</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
