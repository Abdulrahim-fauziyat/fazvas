import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Nav />
      <div
        className="container justify-center elements mb-5 mt-2     
        text-dark rounded  shadow-lg card  sign"
        style={{ maxWidth: "400px" }}
        >
        <h2 className="mt-5 text-center p-3">Sign up Form</h2>
        <form className="p-3 fw-bolder ">
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control "
              id="firstName"
              name="firstName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control "
              id="phoneNumber"
              name="phoneNumber"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
            />
            <p className="text-black">
              Forgot{" "}
              <Link to="/password" className="text-decoration-none text-danger">
                Password?
              </Link>
            </p>
          </div>
          <button type="submit" className="btn btn-primary fw-bold ">
            Sign up
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Signup;
