(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{44:function(e,t,n){e.exports=n(58)},49:function(e,t,n){},50:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),c=n.n(o),l=(n(49),n(50),n(60)),i=n(11),s=Object(i.a)(),u=n(25),m=function(e){var t=e.component,n=Object(u.a)(e,["component"]);return r.a.createElement(l.b,Object.assign({},n,{render:function(e){return r.a.createElement(t,Object.assign({},e,n))}}))},d="http://localhost:8080",g="LOGIN_SUCCESS",p="LOGIN_REQUEST",E="LOGIN_FAILURE",f="SIGNUP_SUCCESS",h="SIGNUP_REQUEST",b="SIGNUP_FAILURE",y="EMPLOYEE_REQUEST",v="EMPLOYEE_SUCCESS",O="EMPLOYEE_FAILURE",S="ALERT_SUCCESS",j="ALERT_ERROR",L="ALERT_CLEAR",w={IsLoggedIn:function(){return!!localStorage.getItem("USER_TOKEN")}},T=function(e){var t=e.component,n=Object(u.a)(e,["component"]);return r.a.createElement(l.b,Object.assign({},n,{render:function(e){return w.IsLoggedIn()?r.a.createElement(t,Object.assign({},e,n)):r.a.createElement(l.a,{to:"/login"})}}))},N=n(17),C=n(8),R=n(15),I=n(65),P=n(61),U=n(62),_=function(e){var t=e.title,n=e.inputFields,a=e.select,o=e.buttonText,c=e.changeHandle,l=e.submitHandle,i=e.isLoading,s=e.redirect,u=e.redirectTo;return r.a.createElement("div",{className:"form"},r.a.createElement(I.a,{className:"form-wrap",onSubmit:l},r.a.createElement("h3",{className:"header"},t),n.map((function(e){return r.a.createElement(I.a.Group,{key:e.name},r.a.createElement(I.a.Label,null,e.label),r.a.createElement(I.a.Control,{type:e.type,name:e.name,placeholder:e.placeholder,onChange:c}))})),a.map((function(e){return r.a.createElement(I.a.Group,{key:e.name},r.a.createElement(I.a.Label,null,e.label),r.a.createElement(I.a.Control,{as:"select",onChange:c,name:e.name},e.options.map((function(e){return r.a.createElement("option",{key:e},e)}))))})),r.a.createElement(P.a,{variant:"primary",type:"submit",style:{minWidth:"100px"}},i?r.a.createElement(U.a,{animation:"border",size:"sm"}):o),r.a.createElement("p",{className:"redirect",onClick:u},s)))},x={signup:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch("".concat(d,"/register"),t).then(k).then((function(e){return e}))},login:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch("".concat(d,"/login"),t).then(k).then((function(e){return localStorage.setItem("USER_TOKEN",e.token),e}))},logout:function(e){var t={method:"DELETE",headers:{"Content-Type":"application/json","x-auth":localStorage.getItem("USER_TOKEN")}};return fetch("".concat(d,"/logout"),t).then(k).then((function(e){return localStorage.clear(),e}))},fetchEmployees:function(){var e={method:"POST",headers:{"Content-Type":"application/json","x-auth":localStorage.getItem("USER_TOKEN")},body:JSON.stringify({})};return fetch("".concat(d,"/list"),e).then(k).then((function(e){return e}))}};function k(e){return e.text().then((function(t){var n=t&&JSON.parse(t);if(!e.ok){e.status;var a=n&&n.message||e.statusText;return Promise.reject(a)}return n}))}var A={alertSuccess:function(e){return{type:S,message:e}},alertError:function(e){return{type:j,message:e}},alertClear:function(){return{type:L}}};var H={signup:function(e){return function(t){t({type:p,user:{data:e}}),x.signup(e).then((function(e){t(function(e){return{type:g,user:e}}(e)),t(A.alertSuccess("You have successfully registered. Please login to continue.")),s.push("login")}),(function(e){t(function(e){return{type:E,error:e}}(e)),t(A.alertError("Something went wrong. Please try again"))}))}},login:function(e){return function(t){t({type:p,user:{data:e}}),x.login(e).then((function(e){t(function(e){return{type:g,user:e}}(e)),t(A.alertSuccess("You have successfully logged in.")),s.push("home")}),(function(e){t(A.alertError(e)),t(function(e){return{type:E,error:e}}(e))}))}},logout:function(e){return function(t){x.logout(e).then((function(e){t(A.alertSuccess("You have successfully logged out.")),s.push("login")}),(function(e){t(A.alertError("Something went wrong. Please try again."))}))}}};var D=n(5),G=function(){var e=Object(D.b)(),t=Object(D.c)((function(e){return e.user.isLoading})),n=Object(a.useState)({name:"",email:"",password:"",designation:"HR"}),o=Object(R.a)(n,2),c=o[0],l=o[1];return r.a.createElement(_,{title:"Register as Employee",inputFields:[{type:"text",name:"name",placeholder:"Enter name",label:"Name"},{type:"email",name:"email",placeholder:"Enter email",label:"Email"},{type:"password",name:"password",placeholder:"password",label:"Password"}],select:[{label:"Choose designation",name:"designation",options:["HR","Software Engineer","Team Lead","Project Manager"]}],buttonText:"Submit",changeHandle:function(e){l(Object(C.a)(Object(C.a)({},c),{},Object(N.a)({},e.target.name,e.target.value)))},submitHandle:function(t){t.preventDefault(),c.name&&c.email&&c.password?e(H.signup(c)):alert("No fields can be empty. Please fill and try again")},isLoading:t,redirect:"Already registered? login here",redirectTo:function(){s.push("login")}})},F=function(){var e=Object(D.b)(),t=Object(D.c)((function(e){return e.user.isLoading})),n=Object(a.useState)({email:"",password:""}),o=Object(R.a)(n,2),c=o[0],l=o[1];return r.a.createElement(_,{title:"Login as Employee",inputFields:[{type:"email",name:"email",placeholder:"Enter email",label:"Email"},{type:"password",name:"password",placeholder:"password",label:"Password"}],select:[],buttonText:"Login",changeHandle:function(e){l(Object(C.a)(Object(C.a)({},c),{},Object(N.a)({},e.target.name,e.target.value)))},submitHandle:function(t){t.preventDefault(),c.email&&c.password?e(H.login(c)):alert("No fields can be empty. Please fill and try again")},isLoading:t,redirect:"New user? register here",redirectTo:function(){s.push("signup")}})},J=n(63),Y=function(e){var t=e.searchText,n=e.changeHandle,a=e.employeeData,o=e.isLoading;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"search-container"},r.a.createElement("input",{className:"search-input",type:"text",placeholder:"Search by name..",name:"search",value:t,onChange:n}),r.a.createElement("i",{className:"fa fa-search search-icon"}))),o?r.a.createElement(U.a,{className:"spinner",animation:"grow"}):r.a.createElement(J.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Id"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Designation"))),r.a.createElement("tbody",null,a.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.designation))})))))},M={fetchDetails:function(){return function(e){var t;e({type:y,user:t}),x.fetchEmployees().then((function(t){var n;e((n=t.data,{type:v,payload:n}))}),(function(t){e(function(e){return{type:O,error:e}}(t))}))}}};var K=n(66),B=n(64),Q=function(){var e=Object(D.b)();return r.a.createElement(K.a,{expand:"lg",variant:"light",bg:"light"},r.a.createElement(B.a,null,r.a.createElement(K.a.Brand,{href:"#"},"REACT APPLICATION")),r.a.createElement(I.a,{inline:!0},r.a.createElement(P.a,{variant:"outline-info",onClick:function(t){t.preventDefault(),e(H.logout())}},"Logout")))},W=function(){var e=Object(D.b)(),t=Object(D.c)((function(e){return e.employee})),n=Object(a.useState)([]),o=Object(R.a)(n,2),c=o[0],l=o[1],i=Object(a.useState)(""),s=Object(R.a)(i,2),u=s[0],m=s[1];Object(a.useEffect)((function(){e(M.fetchDetails())}),[]),Object(a.useEffect)((function(){l(t.employees)}),[t]);return r.a.createElement(a.Fragment,null,r.a.createElement(Q,null),r.a.createElement(Y,{employeeData:c,employeeReducer:t,changeHandle:function(e){m(e.target.value);var n=t.employees.filter((function(t){return-1!==t.name.toLowerCase().search(e.target.value.toLowerCase())}));l(n)},searchText:u,isLoading:t.isLoading}))},z=n(67),$=function(){var e=Object(D.b)(),t=Object(D.c)((function(e){return e.alert}));return r.a.createElement("div",{className:"alert-wrap"},t.message&&r.a.createElement(z.a,{variant:t.type},t.message),t.message&&void setTimeout((function(){e(A.alertClear())}),3e3))};var q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement($,null),r.a.createElement(l.c,{history:s},r.a.createElement(l.d,null,r.a.createElement(l.a,{exact:!0,from:"/",to:"login"}),r.a.createElement(m,{path:"/login",component:F}),r.a.createElement(m,{path:"/signup",component:G}),r.a.createElement(T,{path:"/home",component:W}))))},V=n(14),X=n(42),Z=n(43);var ee={isLoading:!1};var te={isLoading:!1,employees:[]};var ne=Object(V.c)({alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return{type:"success",message:t.message};case j:return{type:"danger",message:t.message};case L:return{};default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return{isLoading:!0};case g:case E:return{isLoading:!1};case h:return{isLoading:!0};case f:case b:return{isLoading:!1};default:return e}},employee:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(C.a)(Object(C.a)({},e),{},{isLoading:!0});case v:return Object(C.a)(Object(C.a)({},e),{},{isLoading:!1,employees:t.payload});case O:return Object(C.a)(Object(C.a)({},e),{},{isLoading:!1});default:return e}}}),ae=Object(Z.createLogger)(),re=Object(V.d)(ne,Object(V.a)(X.a,ae));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(57);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D.a,{store:re},r.a.createElement(q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.9ebf8224.chunk.js.map