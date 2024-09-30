import React, { useContext, useState } from "react";
import "../../components/dashboard-form.css";
import { Context } from "../../../../context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Formloading from "../../../../components/Formloading";

const AddUser = () => {
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [usedName, setUsedName] = useState(false);
  const [errorRole, setErrorRole] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorPasswordCon, setErrorPasswordCon] = useState(false);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  function handleClick(e) {
    e.stopPropagation();

    document
      .querySelector(
        ".main-dashboard form.dashboard-form.user .role .role-select"
      )
      .classList.toggle("active");
  }

  const context = useContext(Context);
  const language = context.language && context.language;
  const token = context.userDetails.token;
  document.body.addEventListener("click", () => {
    const catDiv = document.querySelector(
      ".main-dashboard form.dashboard-form.user .role .role-select.active"
    );
    if (document.body.contains(catDiv)) catDiv.classList.remove("active");
  });

  function handelSelect(e) {
    setRole(e.target.dataset.type);
    setErrorRole(false);
  }

  function showPassword(e) {
    const icon = e.target;
    const input = document.querySelectorAll(`form .no-wrap input.password`);

    icon.classList.toggle("fa-eye");
    input[e.target.dataset.index].type === "password"
      ? (input[e.target.dataset.index].type = "text")
      : (input[e.target.dataset.index].type = "password");
  }

  async function handelSubmit(e) {
    e.preventDefault();
    if (userName === "") {
      setErrorName(true);
    } else if (role === "") {
      setErrorRole(true);
    } else if (password.length < 5) {
      setErrorPassword(true);
    } else if (password !== passwordConfirmation) {
      setErrorPasswordCon(true);
    } else
      try {
        const users = await axios.get("http://localhost:8000/api/users", {
          headers: { Authorization: "Bearer " + token },
        });
        users.data &&
          users.data.map((e, index) => {
            if (userName === e.username) {
              setUsedName(true);
            }
          });

        setLoading(true);
        const data = await axios.post(
          "http://localhost:8000/api/users",
          {
            username: userName,
            password: password,
            role: role,
          },
          { headers: { Authorization: "Bearer " + token } }
        );
        setLoading(false);
        nav("/dashboard/users");
      } catch (err) {
        setLoading(false);
      }
  }

  return (
    <div className="main-dashboard">
      <div className="dashboard-container center">
        <form className="dashboard-form relative user">
          {loading && <Formloading />}
          <label htmlFor="user name">
            {language.add && language.add.username}
          </label>

          <input
            onInput={(e) => {
              setUserName(e.target.value);
              setErrorName(false);
            }}
            className="inp"
            value={userName}
            type="text"
            id="user name"
            name="user name"
            placeholder={language.add && language.add.username_placeHolder}
          />

          {errorName && (
            <p className="error-text">
              {language.add && language.error.error_username}
            </p>
          )}
          {usedName && (
            <p className="error-text">
              {language.add && language.error.error_already_used}
            </p>
          )}
          <label
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".main-dashboard form.dashboard-form.user .role")
                .click();
            }}
          >
            {" "}
            {language.add && language.add.role}
          </label>
          <div onClick={handleClick} className="inp relative role">
            {role || (language.add && language.add.role)}{" "}
            <i className="fa-solid fa-chevron-down"></i>
            <div className="role-select ">
              <p onClick={handelSelect} data-type="admin">
                admin
              </p>
              <p onClick={handelSelect} data-type="user">
                user
              </p>
            </div>
          </div>

          {errorRole && (
            <p className="error-text">
              {language.add && language.error.error_role}
            </p>
          )}

          <label htmlFor="password">
            {" "}
            {language.add && language.add.passowrd}
          </label>

          <div className="no-wrap password relative center">
            <input
              onInput={(e) => {
                setPassword(e.target.value);
                password.length > 5 && setErrorPassword(false);
              }}
              className="password inp"
              value={password}
              name="password"
              type="password"
              placeholder={language.add && language.add.passowrd}
              id="password"
            ></input>
            <i
              onClick={showPassword}
              data-index="0"
              className="fa-regular show fa-eye-slash"
            ></i>
          </div>

          {errorPassword && (
            <p className="error-text">
              {language.add && language.error.error_password}
            </p>
          )}

          <label htmlFor="password confirmation">
            {" "}
            {language.add && language.add.passowrd_confirmation}
          </label>

          <div className="no-wrap relative password center">
            <input
              onInput={(e) => {
                setPasswordConfirmation(e.target.value);
                setErrorPasswordCon(false);
              }}
              className="password inp"
              value={passwordConfirmation}
              name="password confirmation"
              type="password"
              placeholder={language.add && language.add.passowrd_confirmation}
              id="password confirmation"
            ></input>
            <i
              onClick={showPassword}
              data-index="1"
              className="fa-regular show fa-eye-slash"
            ></i>
          </div>

          {errorPasswordCon && (
            <p className="error-text">
              {language.add && language.error.error_passwordConfirmation}
            </p>
          )}

          <button className="btn2 " onClick={handelSubmit}>
            {language.add && language.add.button_submit}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
