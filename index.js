const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.get("/api/courses", (request, response) => {
  response.send([1, 2, 3]);
});

// We use required parameters for essential or required values,
// whereas query string parameters for anything that is optional.
app.get("/api/courses/:year/:month", (request, response) => {
  response.send(request.params);
  // response.send(request.query);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
