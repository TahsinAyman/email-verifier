const emailExistence = require("email-existence");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const email = request.query.email;
  if (email) {
    emailExistence.check(email, (error, resp) => {
      response.send(resp);
    });
  } else {
    response.send(false);
  }
});

app.listen(8000, "0.0.0.0", (error) => {
  console.log("Running");
});
