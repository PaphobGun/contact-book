import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container my-5">
      <h1 className="display-4 text-danger">Error 404 Page Not Found</h1>
      <div className="card mt-5">
        <div className="card-body">
          <div className="card-title">
            Url is not correct please click the link on navbar to navigate to
            the right page or click on this button
          </div>
          <hr />
          <Link to="/" className="btn btn-primary">
            Go to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
