
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Signup() {
    const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form submitted");
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <img src="media/images/signup.png" className="img-fluid" alt="Signup" />
        </div>
        <div className="col-lg-6 col-md-12">
          <form onSubmit={handleSubmit}>
            <div className="form-group" >
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={handleOnChange}
                value={email}
                name="email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputUsername">Username</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputUsername"
                placeholder="Enter Username"
                onChange={handleOnChange}
                value={username}
                name="username"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your Username with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={handleOnChange}
                value={password}
                name="password"
              />
            </div>
            <div className="form-check mt-3">
              <p className="fs-5">you have already an account  <Link to="/login" className="text-decoration-none">Login</Link></p>
            </div>
            <button type="submit" className="btn btn-primary mt-5">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
