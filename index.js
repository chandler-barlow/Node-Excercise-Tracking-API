const express = require("express");
const morgan = require("morgan");
const db = require("./database/db");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use("/api/users", require("./routes/api/users"));
app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
