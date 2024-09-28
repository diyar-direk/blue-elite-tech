import React from "react";
import "./login.css";

const Login = () => {
  return (
    <>
      <main className="section-color">
        <div className="container flex login-container">
          <form action="" className="login flex">
            <div className="profile-log">
              <div className="icon-background">
                <i class="fa-solid fa-user"></i>
              </div>
            </div>
            <div className="input-wrapper">
              <div className="input">
                <input type="text" placeholder="User name" />
                <i class="fa-solid fa-user"></i>
              </div>
              <div className="input">
                <input type="password" placeholder="Password" />
                <i class="fa-solid fa-lock"></i>
              </div>
            </div>
            <button className="btn2">Submit</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
