const express = require("express");
const app = express();
const courses = require("./routes/courses");
const home = require("./routes/home");

app.use(express.json());
app.use("/api/courses", courses); // for any routes that start with /api/courses, use this courses router.
app.use("/", home);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
