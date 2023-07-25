import React, { useEffect, useState } from "react";
import "./styles.css";
export const Form = (props) => {
  const [formData, setFormData] = useState({
    user: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  function handleChange(e) {
    const { value, name } = e.target;
    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.dataInParent(formData);
  }
  return (
    <div className="main">
      <h4> {props.heading}</h4>
      <form className="main" onSubmit={handleSubmit}>
        <div>
          {" "}
          user:{" "}
          <input
            type="text"
            required
            name="user"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          {" "}
          email:{" "}
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          {" "}
          password:{" "}
          <input
            required
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
