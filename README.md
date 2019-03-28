## Contact Book Project

Web application that user can sign in with google account and ADD/EDIT/DELETE a detail of person.Basicly it's a full CRUD web apps follow RESTful convention.

### Tools

This application is created by create-react-app and use react-rounter to make a single page application.
Redux is the library that used for maintain / manage central store and also used redux-thunk to be a middleware for make AJAX call.Bootstrap is the css library that used for styling this project and used SASS ( SCSS ) for pre-process.
Json-server is the virtual server for REST api in this project the server is deploy on Heroku.
Authorization in this project I used OAuth ( google auth ) to implement.

### How to use ?
In order to ADD/EDIT or DELETE a contact.User need to sign in with google account.
A contact can be delete by the one who added it only ( can not delete the contact that added by another user ).

