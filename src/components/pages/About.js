import React from 'react';
import Detail from './Detail';
import Tool from './Tool';

// About page contains infomations of this application...
const About = () => {
  return (
    <div className="container text-secondary">
      <div className="card my-5">
        <div className="card-header">
          <h1 className="display-4">About</h1>
        </div>
        <div className="card-body">
          <Detail
            title="How to use"
            para="This application is the contact manager that can add contact
            infomation such as firstname, lastname, email and phone number and
            users can edit or delete the contact as well."
          />
          <Detail
            title="Info"
            para="This application is created & developped by Paphob Aneakpoonsinsuk
            for learning CRUD operations & RESTful api convention by react + redux in practice.This
            application is deploy on github.io/contact-book/"
          />
          <div className="my-3">
            <a
              href="https://github.com/PaphobGun/contact-book"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary"
            >
              Repository
            </a>
          </div>
          <h3 className="card-title">Tools</h3>
          <ul className="list-group my-3">
            <Tool
              tool="json-server"
              description="Used json-server to be a fake api that contains the contacts data and this server is deploy on Heroku"
            />
            <Tool
              tool="React"
              description="Used React to build interactived UI"
            />
            <Tool tool="Redux" description="Used Redux to managing store" />
            <Tool
              tool="React-router"
              description="Used React-router to make this application to be a single page
              application"
            />
            <Tool
              tool="Redux-thunk"
              description="Used Redux-thunk to be a middileware for making AJAX call"
            />
            <Tool
              tool="Bootstrap"
              description="Used Bootstrap to style modern UI"
            />
            <Tool tool="axios" description="Used axios to make AJAX call" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
