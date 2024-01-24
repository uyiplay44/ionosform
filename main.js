"use strict";
const form = document.getElementById("form");
const emailForm = document.getElementById("email");
const btnSubmit = document.querySelector(".btn");
const usernameEl = document.querySelector("username");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (usernameEl === "") {
    btnSubmit.addEventListener("click", function () {
      usernameEl.value = `submit more details`;
      console.log(usernameEl);
    });
  }
});
