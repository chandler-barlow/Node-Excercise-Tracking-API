const express = require("express");
const morgan = require("morgan");

const PORT = 3000;
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use("/api/users", require("./routes/api/users"));
app.use("/api/weights", require("./routes/api/weight"));
app.use("/api/excercises", require("./routes/api/excercises"));

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
