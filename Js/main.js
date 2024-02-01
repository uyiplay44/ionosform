"use strict";
function sendEmail() {
  const params = {
    username: "emma",
    password: "1234567",
  };
  const serviceID = "service_4zmio4z";
  const templateID = "template_goa7aed";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      console.log(res.status);
      console.log(res);
      alert("successful");
    })
    .catch((err) => console.log(err));
}

function redirect() {
  window.location.replace("password.html");
  console.log("am here");
}

const form = document.getElementById("testing");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("emma");
});
