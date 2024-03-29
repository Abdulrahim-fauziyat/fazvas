import React from "react";

const Profile = () => {
  return (
     <div className="container-fluid body-bg-white ">
    <div className="container mt-5 ">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card rounded  border-none text-dark shadow-lg">
            <div className="card-header bg-white h5 text-center">User- Info</div>
            <div className=" jus">
              <form className="fw-bolder">
                   <div className="bold card-body">Name:</div>
                   <div className="bold card-body">Password:</div>
                   <div className="bold card-body">Email:</div>

               
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card mt-4 mt-lg-0 rounded shadow-lg   card rounded border-none text-dark">
            <div className="card-header text-center bg-white h5">Update password</div>
            <div className="card-body">
              <form className="fw-bolder">
                <div className="mb-3">
                  <label htmlFor="oldPassword" className="form-label">
                    Old Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="oldPassword"
                    name="oldPassword"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="newPassword" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                    name="newPassword"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                  />
                </div>
                <button type="submit" className="btn btn-primary fw-bold w-100">
                  Confirm
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
