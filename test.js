"use strict";

const myForm = document.getElementById("myform");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  location.replace("password.html");
});
