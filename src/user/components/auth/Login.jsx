import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";

const Login = () => {
  return (
    <>
      <Nav />

      <div
        className="container justify-center elements mb-5 mt-5 card text-black rounded"
        style={{ maxWidth: "400px" }}
      >
        <h2 className="mt-5 text-center p-3 text-dark"> Login</h2>
        <form className="p-3 fw-bolder text-dark ">
          <div className="mb-3">
            <label htmlFor="email/phoneNumber" className="form-label">
              Email/phoneNumber
            </label>
            <input
              type="email/phoneNumber"
              className="form-control"
              id="email"
              name="email/phoneNumber"
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
            <p className="text-">
              Forgot{" "}
              <Link to="/password" className="text-decoration-none text-danger">
                Password?
              </Link>
            </p>
          </div>
          <button type="submit" className="btn btn-primary fw-bold">
            Sign up
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Login;
