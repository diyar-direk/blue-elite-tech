import React, { useContext, useState } from "react";
import "./login.css";
import Formloading from "../components/Formloading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { Context } from "../context/Context";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const context = useContext(Context);
  const [wrongData, setWrongData] = useState(false);
  const language = context.language && context.language;

  const nav = useNavigate();
  const cookie = new Cookies();
  function showPassword(e) {
    e.target.classList.toggle("fa-eye");
    const input = document.querySelector(
      `.login-container form.login .input input.pass`
    );
    input.type === "password"
      ? (input.type = "text")
      : (input.type = "password");
  }

  function formChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submitdata(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/users/login",
        form
      );
      console.log(res);

      cookie.set("token", res.data.token);
      context.setUserDetails({
        token: res.data.token,
        isAdmin: res.data.userRole.includes("admin"),
        user: res.data.userRole,
      });
      nav("/dashboard");
    } catch (err) {
      console.log(err);
      if (err.status === 401) setWrongData(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <main className=" center sub-page section-color">
        <div className="container center login-container">
          <form onSubmit={submitdata} className="login relative flex">
            {loading && <Formloading />}
            <h1>{language.login && language.login.homeLink}</h1>
            <div className="profile-log">
              <div className="icon-background">
                <i className="fa-solid fa-user"></i>
              </div>
            </div>
            <div className="input-wrapper">
              <div className="input">
                <input
                  value={form.username}
                  onInput={formChange}
                  name="username"
                  type="text"
                  placeholder={
                    language.login && language.login.username_placeHolder
                  }
                  required
                />
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="input">
                <i
                  onClick={showPassword}
                  className="fa-regular password fa-eye-slash"
                ></i>
                <input
                  name="password"
                  type="password"
                  className="pass"
                  placeholder={
                    language.login && language.login.password_placeHolder
                  }
                  value={form.password}
                  onInput={formChange}
                  required
                />
                <i className="fa-solid fa-lock"></i>
              </div>
            </div>
            {wrongData && (
              <p className="error-text">wrong password or username </p>
            )}

            <button className="btn2 center">
              {language.login && language.login.button_login}
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
