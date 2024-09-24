import React from "react";

const Form = ({ children, onSubmit, title }) => {
  return (
    <form onSubmit={onSubmit}>
      <h1>title</h1>
      <label htmlFor="name">full name</label>
      <input
        placeholder="please enter full name"
        type="text"
        id="name"
        className="inp"
      />
      <label htmlFor="phone"> phone number </label>
      <input
        placeholder="please enter phone number"
        type="text"
        className="inp"
        id="phone"
      />
      <label htmlFor="email"> email </label>
      <input
        placeholder="please enter email"
        type="text"
        className="inp"
        id="email"
      />
      {children}

      <textarea id="massage" value="" />

      <div className="submit-btn">submit</div>
    </form>
  );
};
Form.Lable = ({ children, htmlFor }) => {
  return <label htmlFor={htmlFor}> {children} </label>;
};
export default Form;
