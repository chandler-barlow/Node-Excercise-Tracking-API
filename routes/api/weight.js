const express = require("express");
const router = express.Router();
const db = require("../../database/db");

router.get("/all", (req, res) => {
  const sql = "SELECT * FROM weights";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.get("/by_userId/:id", (req, res) => {
  const id = req.params.id;
  const sql = `SELECT weight FROM weights WHERE user_id = ${id}`;
  if (!userId || !weight)
    return res.status(400).send({ msg: "please include an id" });
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.post("/add", (req, res) => {
  const userId = req.body.userId;
  const weight = req.body.weight;
  const sql = `INSERT INTO weights (weight,user_id) VALUES (${weight},${userId})`;
  if (!userId || !weight)
    return res.status(400).send({ msg: "please include a weight and userId" });
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send({
      msg: "Successfully inserted a new weight into the database!",
      id: result.insertId
    });
  });
});

router.put("/edit", (req, res) => {
  const id = req.body.id;
  const weight = req.body.weight;
  const sql = `UPDATE weights SET weight = ${weight} WHERE (id = ${id})`;
  if (!userId || !weight)
    return res.status(400).send({ msg: "please include a weight and userId" });
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send({
      msg: `Successfully edited weight with id ${id}`,
      id: id
    });
  });
});

router.delete("/delete", (req, res) => {
  const id = req.body.id;
  const sql = `DELETE FROM weights WHERE (id = ${id})`;
  if (!id) return res.status(400).send({ msg: "please include an id" });
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send({ msg: `successfully deleted weight at ${id}` });
  });
});

module.exports = router;
