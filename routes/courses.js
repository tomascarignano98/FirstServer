const express = require("express");
const router = express.Router();

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" }
];

router.get("/", (request, response) => {
  response.send(courses);
});

// We use required parameters for essential or required values,
// whereas query string parameters for anything that is optional.
router.get("/:id", (request, response) => {
  const course = courses.find(
    (course) => course.id === parseInt(request.params.id)
  );

  if (!course) return response.status(404).send("Course not found.");
  response.send(course);
});

router.post("/", (request, response) => {
  const course = {
    id: courses.length + 1,
    name: request.body.name
  };

  courses.push(course);
  response.send(course);
});

router.put("/:id", (request, response) => {
  const course = courses.find(
    (course) => course.id === parseInt(request.params.id)
  );

  if (!course) return response.status(404).send("Course not found.");

  course.name = request.body.name;
  response.send(course);
});

router.delete("/:id", (request, response) => {
  const course = courses.find(
    (course) => course.id === parseInt(request.params.id)
  );
  if (!course) return response.status(404).send("Course not found.");

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  response.send(course);
});

module.exports = router;
