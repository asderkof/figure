import React from "react";
import { Link } from "react-router-dom";
import MenuLayout from "../layout/MenuLayout";

export default () => (
  <MenuLayout>
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
          <h1 className="display-4">Figure HQ</h1>
          <p className="lead">
            Compensation Team as a Service
          </p>
          <hr className="my-4" />
          <Link
            to="/overview"
            className="btn btn-lg custom-button"
            role="button"
          >
            Enter
          </Link>
        </div>
      </div>
    </div>
  </MenuLayout>
);