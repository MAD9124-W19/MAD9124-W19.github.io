(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{259:function(t,e,i){"use strict";i.r(e);var a=i(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),i("p",[t._v("In addition to correctly implementing all of the requirements from the previous assignment. The application will implement the following.")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),i("p",[t._v("Make sure to redact the user's password.")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),i("p",[t._v("DO NOT store the password or the JWT.")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),i("ul",[i("li",[t._v("Accept this "),i("a",{attrs:{href:"https://classroom.github.com/a/yen1qJnx",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Classroom assignment"),i("OutboundLink")],1),t._v(" invitation.")]),t._v(" "),i("li",[t._v("Clone the repo to your latptop.")]),t._v(" "),i("li",[t._v("Build the project on your laptop.")]),t._v(" "),i("li",[t._v("Test each route with Postman.")]),t._v(" "),i("li",[t._v("Make git commits as you complete each requirement")]),t._v(" "),i("li",[t._v("When everything is complete, push the final commit back up to GitHub and submit the GitHub repo's URL on BirghtSpace.")])]),t._v(" "),t._m(13)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("span",{staticClass:"week"},[this._v("JWT Authentication")]),this._v(" "),e("br"),this._v(" "),e("span",{staticClass:"title"},[this._v("Assignment 3")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Due before our week 10 class.")]),this._v(" "),e("p",[this._v("Counts for 5% of your final grade.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"the-brief"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-brief","aria-hidden":"true"}},[this._v("#")]),this._v(" The brief")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This is the third of three take home assignments related to building a backend web service to support a simple class list application called "),e("em",[this._v("cListR")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In the previous assignments you built the base for the "),e("em",[this._v("cListR")]),this._v(" RESTful API using Node.js, the Express framework and MongoDB. For this assignment you will enhance that foundation with JWT based authentication.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"core-requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#core-requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Core Requirements")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Create a new "),e("code",[this._v("/auth")]),this._v(" router module that will support")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("creating new users")]),this._v(" "),e("li",[this._v("authenticating a user")]),this._v(" "),e("li",[this._v("retrieving the currently logged-in user")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ol",{attrs:{start:"2"}},[i("li",[i("p",[t._v("The user schema should have the following properties:")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("Property")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("Required")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("Max Length")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("Default")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("firstName")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("64")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}})]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("lastName")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("64")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}})]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("email")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("512")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}})]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("password")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("70")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}})]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("isAdmin")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}}),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("false")])])])])]),t._v(" "),i("li",[i("p",[t._v("All API routes for the "),i("em",[t._v("students")]),t._v(" and "),i("em",[t._v("courses")]),t._v(" resource paths should only be accessible to authenticated users.")])]),t._v(" "),i("li",[i("p",[t._v("All "),i("code",[t._v("POST")]),t._v(", "),i("code",[t._v("PUT")]),t._v(", "),i("code",[t._v("PATCH")]),t._v(", and "),i("code",[t._v("DELETE")]),t._v(" routes for both the "),i("em",[t._v("students")]),t._v(" and "),i("em",[t._v("courses")]),t._v(" resource paths should be limited to authenticated users with the "),i("code",[t._v("isAdmin")]),t._v(" flag set to true.")])]),t._v(" "),i("li",[i("p",[t._v("Record each login attempt in an "),i("code",[t._v("authentication_attempts")]),t._v(" collection in MongoDB. The properties of each attempt document should include:")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("Property")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("Required")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("Max Length")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("username")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("64")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("ipAddress")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("64")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("didSucceed")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}})]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("createdAt")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Date")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"6"}},[e("li",[this._v("Ensure that you write clean and readable code. Pay attention to:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("no runtime errors")]),t._v(" "),i("li",[t._v("consistent 2 space indentation")]),t._v(" "),i("li",[t._v("logical grouping of related code")]),t._v(" "),i("li",[t._v("semantically descriptive names for variables and functions")]),t._v(" "),i("li",[t._v("well organized project folder structure")]),t._v(" "),i("li",[t._v("properly formatted "),i("code",[t._v("package.json")]),t._v(" file\n"),i("ul",[i("li",[t._v("correct project name")]),t._v(" "),i("li",[t._v("your author details")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"logistics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logistics","aria-hidden":"true"}},[this._v("#")]),this._v(" Logistics")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("It is a good habit to make a git commit as you complete each logical requirement. This not only tracks your progress, but protects your working code in case you later break it and need to roll back.")])])}],!1,null,null,null);s.options.__file="assignment3.md";e.default=s.exports}}]);