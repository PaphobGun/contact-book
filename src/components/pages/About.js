import React from 'react';

// About page contains infomations of this application...
const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-9 mx-auto">
          <div className="card mt-5">
            <div className="card-header bg-danger text-white">
              <h5>
                How to use <i className="fas fa-question-circle" />
              </h5>
            </div>
            <div className="card-body">
              In order to add new contact you have to{' '}
              <span className="text-danger">sign in with google account</span>,
              and then you will see the "Add Contact" menu from the navbar.You
              can edit and delete the contact that added by yourself only ,
              <span className="text-danger">
                You can not edit or delete the one that added by others.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-9 mx-auto">
          <div className="card mt-5">
            <div className="card-header bg-danger text-white">
              <h5>
                Information <i className="fas fa-exclamation-circle" />
              </h5>
            </div>
            <div className="card-body">
              This aplication created by Paphob Aneakpoonsinsuk. Using React and
              Redux to developped.This aplication have a full CRUD operation by
              making request on REST API, json-server is the API that used in
              this project and hosted on Heroku.com, In this aplication will use
              OAuth ( google login ) to manage Authorization.
            </div>
            <div className="card-footer">
              <a
                href="https://github.com/PaphobGun/contact-book"
                className="btn btn-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
              <p className="d-inline ml-2">
                Here is the link to Github repository
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
