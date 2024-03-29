import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";

const Forgotpassword = () => {
  return (
    <>
      <Nav />
      
      <div
        className="container justify-center elements mb-5 mt-5  text-white rounded"
        style={{ maxWidth: 400 }}
      >
        <h2 className="mt-5 text-center p-3">Forgot password</h2>
        <form className="p-3 fw-bolder ">
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

          <button type="submit" className="btn btn-primary fw-bold ">
            Recover
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Forgotpassword;
