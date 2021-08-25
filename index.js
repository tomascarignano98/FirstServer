const express = require("express");
const app = express();

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" }
];

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.get("/api/courses", (request, response) => {
  response.send(courses);
});

// We use required parameters for essential or required values,
// whereas query string parameters for anything that is optional.
app.get("/api/courses/:id", (request, response) => {
  const course = courses.find(
    (course) => course.id === parseInt(request.params.id)
  );

  if (!course) response.status(404).send("Course not found.");
  response.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
