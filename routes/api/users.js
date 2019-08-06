const express = require("express");
const router = express.Router();
const db = require("../../database/db");

router.get("/", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

router.get("/:id", (req, res) => {
  const sql = `SELECT name FROM users WHERE users.id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;
