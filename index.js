const { request, response } = require("express");
const express = require("express");
const app = express();
app.use(express.json());

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

  if (!course) return response.status(404).send("Course not found.");
  response.send(course);
});

app.post("/api/courses/", (request, response) => {
  const course = {
    id: courses.length + 1,
    name: request.body.name
  };

  courses.push(course);
  response.send(course);
});

app.put("/api/courses/:id", (request, response) => {
  const course = courses.find(
    (course) => course.id === parseInt(request.params.id)
  );

  if (!course) return response.status(404).send("Course not found.");

  course.name = request.body.name;
  response.send(course);
});

app.delete("/api/courses/:id", (request, response) => {
  const course = courses.find(
    (course) => course.id === parseInt(request.params.id)
  );
  if (!course) return response.status(404).send("Course not found.");

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  response.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
