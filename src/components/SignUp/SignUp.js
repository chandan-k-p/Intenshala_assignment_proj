import React from "react";

import "./SignUp.css";

const SignUp = () => {
  return (
    <>
      <div className="container-fluid row mx-auto  mt-2 mb-4 ">
        <div className="col">
          <div className="col-sm-4"></div>
          <div className="col-sm-6 mx-auto border bg-dark p-4">
            <form>
              <h3 className="text-center text-white">Sign Up</h3>

              <div className="form-group">
                <label className="text-white"> Name :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>

              <div className="form-group">
                <label className="text-white">Date Of Birth :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="DD/MM/YYYY"
                />
              </div>

              <div className="form-group">
                <label className="text-white">Gender :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Choose Male/Female"
                />
              </div>
              <div className="form-group">
                <label className="text-white">Address :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Location"
                />
              </div>

              <div className="form-group">
                <label className="text-white">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label className="text-white">Phone Number:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Should be 10-digit"
                />
              </div>

              <div className="form-group">
                <label className="text-white">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </>
  );
};

export default SignUp;
