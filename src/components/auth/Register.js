import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import facebook from "./../../img/facebook.png";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    password2: "",
  });
  const { name, email, number, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.getAttribute("name")]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Password do not match");
    } else {
      console.log(formData);
    }
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Mobile Number"
            name="number"
            value={number}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            minLength="6"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={(e) => onChange(e)}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />{" "}
        <br />
        <div>
          {" "}
          Login with <br />
          <button className="btn social-acc-box" id="newFbId">
            <div className="facebook-logo">
              <img src={facebook} width="5" />
            </div>
            <div className="facebook-text">Facebook</div>
          </button>
          {/* <input type="submit" className="btn btn-primary" value="Facebook" /> */}
        </div>
      </form>
      <p className="my-1">
        Already have an account? <Link to="login">Sign In</Link>
      </p>
    </Fragment>
  );
};

export default Register;
