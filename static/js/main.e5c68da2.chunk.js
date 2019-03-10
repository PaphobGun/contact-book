(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,a){e.exports=a(75)},71:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);a(27),a(28);var n=a(0),r=a.n(n),o=a(35),s=a.n(o),c=a(6),l=a(7),i=a(9),m=a(8),p=a(10),u=a(12),d=a(77),h=a(79),b=a(78),E=a(13),f=a(37),v=a(40),N=a(15),y={persons:[],person:{}},O=Object(E.c)({person:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PERSONS":return Object(N.a)({},e,{persons:t.payload});case"FETCH_PERSON":return Object(N.a)({},e,{person:t.payload});case"ADD_PERSON":return Object(N.a)({},e,{persons:[t.payload].concat(Object(v.a)(e.persons))});case"DEL_PERSON":return Object(N.a)({},e,{persons:e.persons.filter(function(e){return e.id!==t.payload})});case"EDIT_PERSON":return Object(N.a)({},e,{persons:e.persons.map(function(e){return e.id===t.payload.id?e=t.payload:e})});default:return e}}}),g=[f.a],j=Object(E.e)(O,{},Object(E.d)(E.a.apply(void 0,g),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()||Object(E.d)())),k=a(76),S=function(e){var t=e.icon,a=e.text,n=e.path;return r.a.createElement("li",{className:"nav-item"},r.a.createElement(k.a,{to:n,className:"nav-link"},r.a.createElement("i",{className:t})," ",a))},x=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary"},r.a.createElement("div",{className:"container"},r.a.createElement(k.a,{to:"/",className:"navbar-brand"},"Contact Book"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarMain"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarMain"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement(S,{icon:"fas fa-home",text:"Home",path:"/"}),r.a.createElement(S,{icon:"fas fa-plus-square",text:"Add Contact",path:"/persons/add"}),r.a.createElement(S,{icon:"fas fa-question-circle",text:"About",path:"/about"}))," ")))},w=a(11),P=a.n(w),C=a(16),R=a(17),_=a.n(R),D=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).deletePerson=function(e){a.props.delPerson(e)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.person,t=e.firstName,a=e.lastName,n=e.email,o=e.phone,s=e.id;return r.a.createElement("div",{className:"card mb-4"},r.a.createElement("div",{className:"card-header clearfix"},r.a.createElement("h4",{className:"text-secondary"},t)),r.a.createElement("div",{className:"card-body text-secondary"},r.a.createElement("p",null,"First Name: ",t),r.a.createElement("p",null,"Last Name: ",a),r.a.createElement("p",null,"Email: ",n),r.a.createElement("p",null,"Phone: ",o)),r.a.createElement("div",{className:"card-footer"},r.a.createElement(k.a,{className:"btn btn-info",to:"/persons/edit/".concat(s)},"Edit"),r.a.createElement("button",{className:"ml-2 btn btn-danger",onClick:this.deletePerson.bind(this,s)},"Delete")))}}]),t}(n.Component),A=Object(u.b)(null,{delPerson:function(e){return function(){var t=Object(C.a)(P.a.mark(function t(a){return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.delete("https://server-contactbook.herokuapp.com/persons/".concat(e));case 2:a({type:"DEL_PERSON",payload:e});case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(D),T=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).renderPersons=function(){return a.props.persons.map(function(e){return r.a.createElement(A,{key:e.id,person:e})})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchPersons()}},{key:"render",value:function(){return 0===this.props.persons.length?r.a.createElement("div",{className:"container my-5 text-center"},r.a.createElement("div",{className:"spinner-border text-primary",role:"status"}),r.a.createElement("h1",{className:"mt-5 display-4 text-primary"},"Add New Contact")):r.a.createElement("div",{className:"container my-5"},r.a.createElement("h1",{className:"display-4 mb-5 text-primary"},"My Contacts"),this.renderPersons())}}]),t}(n.Component),U=Object(u.b)(function(e){return{persons:e.person.persons}},{fetchPersons:function(){return function(){var e=Object(C.a)(P.a.mark(function e(t){var a;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("https://server-contactbook.herokuapp.com/persons/");case 2:a=e.sent,t({type:"FETCH_PERSONS",payload:a.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(T),F=a(14),q=a(38),I=a.n(q),L=function(e){var t=e.name,a=e.label,n=e.type,o=e.placeholder,s=e.error,c=e.value,l=e.handleChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{name:t,type:n,value:c,className:I()("form-control",{"is-invalid":s}),placeholder:o,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s)))},H=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onChange,a=e.onSubmit,n=this.props.parentState,o=n.errors,s=n.firstName,c=n.lastName,l=n.email,i=n.phone;return r.a.createElement("form",{onSubmit:a},r.a.createElement(L,{name:"firstName",label:"First Name",type:"text",placeholder:"Enter First Name",handleChange:t,value:s,error:o.firstName}),r.a.createElement(L,{name:"lastName",label:"Last Name",type:"text",placeholder:"Enter Last Name",handleChange:t,value:c,error:o.lastName}),r.a.createElement(L,{name:"email",label:"Email",type:"email",placeholder:"Enter Email",handleChange:t,value:l,error:o.email}),r.a.createElement(L,{name:"phone",label:"Phone Number",type:"text",placeholder:"Enter Phone Number",handleChange:t,value:i,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Submit",className:"btn btn-primary btn-block"}))}}]),t}(n.Component),X=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={firstName:"",lastName:"",email:"",phone:"",errors:{}},a.onChange=function(e){return a.setState(Object(F.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.firstName,r=t.lastName,o=t.email,s=t.phone;if(""!==n)if(""!==r)if(""!==o)if(""!==s){var c={firstName:n,lastName:r,email:o,phone:s};a.props.addPerson(c),a.setState({firstName:"",lastName:"",email:"",phone:"",errors:{}}),a.props.history.push("/")}else a.setState({errors:{phone:"Phone Number is required"}});else a.setState({errors:{email:"Email is required"}});else a.setState({errors:{lastName:"Last Name is required"}});else a.setState({errors:{firstName:"First Name is required"}})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container my-5"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",{className:"text-secondary"},"Add New Person")),r.a.createElement("div",{className:"card-body"},r.a.createElement(H,{parentState:this.state,onChange:this.onChange,onSubmit:this.onSubmit}))))}}]),t}(n.Component),B=Object(u.b)(null,{addPerson:function(e){return function(){var t=Object(C.a)(P.a.mark(function t(a){var n;return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.post("https://server-contactbook.herokuapp.com/persons/",e);case 2:n=t.sent,a({type:"ADD_PERSON",payload:n.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(X),M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={firstName:"",lastName:"",email:"",phone:"",errors:{}},a.onChange=function(e){return a.setState(Object(F.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.firstName,r=t.lastName,o=t.email,s=t.phone;if(""!==n)if(""!==r)if(""!==o)if(""!==s){var c={id:a.props.match.params.id,firstName:n,lastName:r,email:o,phone:s};a.props.editPerson(c),a.setState({firstName:"",lastName:"",email:"",phone:"",errors:{}}),a.props.history.push("/")}else a.setState({errors:{phone:"Phone Number is required"}});else a.setState({errors:{email:"Email is required"}});else a.setState({errors:{lastName:"Last Name is required"}});else a.setState({errors:{firstName:"First Name is required"}})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.fetchPerson(e)}},{key:"componentDidUpdate",value:function(e,t,a){this.props.person!==e.person&&this.setState(this.props.person)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container my-5"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",{className:"text-secondary"},"Edit Information")),r.a.createElement("div",{className:"card-body"},r.a.createElement(H,{parentState:this.state,onChange:this.onChange,onSubmit:this.onSubmit}))))}}]),t}(n.Component),J=Object(u.b)(function(e){return{person:e.person.person}},{fetchPerson:function(e){return function(){var t=Object(C.a)(P.a.mark(function t(a){var n;return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.get("https://server-contactbook.herokuapp.com/persons/".concat(e));case 2:n=t.sent,a({type:"FETCH_PERSON",payload:n.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},editPerson:function(e){return function(){var t=Object(C.a)(P.a.mark(function t(a){var n;return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.put("https://server-contactbook.herokuapp.com/persons/".concat(e.id),e);case 2:n=t.sent,a({type:"EDIT_PERSON",payload:n.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(M),G=function(e){var t=e.title,a=e.para;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"card-title"},t),r.a.createElement("p",{className:"lead mb-3"},a))},V=function(e){var t=e.tool,a=e.description;return r.a.createElement("li",{className:"list-group-item"},r.a.createElement("h4",null,t),r.a.createElement("hr",null),r.a.createElement("p",{className:"lead"},a))},W=function(){return r.a.createElement("div",{className:"container text-secondary"},r.a.createElement("div",{className:"card my-5"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h1",{className:"display-4"},"About")),r.a.createElement("div",{className:"card-body"},r.a.createElement(G,{title:"How to use",para:"This application is the contact manager that can add contact\r infomation such as firstname, lastname, email and phone number and\r users can edit or delete the contact as well."}),r.a.createElement(G,{title:"Info",para:"This application is created & developped by Paphob Aneakpoonsinsuk\r for learning CRUD operations & RESTful api convention by react + redux in practice.This\r application is deploy on github.io/contact-book/"}),r.a.createElement("div",{className:"my-3"},r.a.createElement("a",{href:"https://github.com/PaphobGun/contact-book",target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline-primary"},"Repository")),r.a.createElement("h3",{className:"card-title"},"Tools"),r.a.createElement("ul",{className:"list-group my-3"},r.a.createElement(V,{tool:"json-server",description:"Used json-server to be a fake api that contains the contacts data and this server is deploy on Heroku"}),r.a.createElement(V,{tool:"React",description:"Used React to build interactived UI"}),r.a.createElement(V,{tool:"Redux",description:"Used Redux to managing store"}),r.a.createElement(V,{tool:"React-router",description:"Used React-router to make this application to be a single page\r application"}),r.a.createElement(V,{tool:"Redux-thunk",description:"Used Redux-thunk to be a middileware for making AJAX call"}),r.a.createElement(V,{tool:"Bootstrap",description:"Used Bootstrap to style modern UI"}),r.a.createElement(V,{tool:"axios",description:"Used axios to make AJAX call"})))))},$=function(){return r.a.createElement("div",{className:"container my-5"},r.a.createElement("h1",{className:"display-4 text-danger"},"Error 404 Page Not Found"),r.a.createElement("div",{className:"card mt-5"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-title"},"Url is not correct please click the link on navbar to navigate to the right page or click on this button"),r.a.createElement("hr",null),r.a.createElement(k.a,{to:"/",className:"btn btn-primary"},"Go to home"))))},z=(a(71),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,{store:j},r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement(h.a,null,r.a.createElement(b.a,{exact:!0,path:"/",component:U}),r.a.createElement(b.a,{exact:!0,path:"/persons/add",component:B}),r.a.createElement(b.a,{exact:!0,path:"/persons/edit/:id",component:J}),r.a.createElement(b.a,{exact:!0,path:"/about",component:W}),r.a.createElement(b.a,{component:$})))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(73),a(74);s.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.e5c68da2.chunk.js.map