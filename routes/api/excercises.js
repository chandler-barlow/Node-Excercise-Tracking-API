const express = require("express");
const router = express.Router();
const db = require("../../database/db");
const createUpdateQuery = require("../../helperFunctions/queryGenerators");

router.use("/by_userId", require("./excercisesByUsers"));

router.get("/all", (req, res) => {
  const sql = `SELECT users.name, excercises.user_id, excercises.lift_name, excercises.id, excercises.weight, excercises.date
       FROM users 
       INNER JOIN excercises 
       ON users.id = excercises.user_id
       ORDER BY excercises.date`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.get("/by_muscleGroup/:group", (req, res) => {
  const sql = `SELECT users.name, excercises.lift_name, excercises.weight, excercises.date 
     FROM users 
     INNER JOIN excercises 
     ON users.id = excercises.user_id
     WHERE excercises.muscle_group = '${req.params.group}'
     ORDER BY excercises.date`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.get("/by_liftName/:name", (req, res) => {
  const sql = `SELECT users.name, excercises.weight, excercises.reps, excercises.date 
     FROM users 
     INNER JOIN excercises 
     ON users.id = excercises.user_id
     WHERE excercises.lift_name = '${req.params.name}'
     ORDER BY excercises.date`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.post("/add", (req, res) => {
  const muscleGroup = req.body.muscleGroup;
  const liftName = req.body.liftName;
  const reps = req.body.reps;
  const weight = req.body.weight;
  const userId = req.body.userId;
  const sql = `INSERT INTO excercises (muscle_group, lift_name, reps, weight, user_id)
               VALUES ('${muscleGroup}', '${liftName}', ${reps}, ${weight}, ${userId})`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send({
      msg: `Succesfully added excercise into database!`,
      id: result.insertId
    });
  });
});

router.put("/edit", (req, res) => {
  const id = req.body.id;
  const muscleGroup = req.body.muscleGroup;
  const liftName = req.body.liftName;
  const reps = req.body.reps;
  const weight = req.body.weight;
  const sql = createUpdateQuery(
    "excercises",
    "id",
    id,
    [muscleGroup, liftName, reps, weight],
    ["muscle_group", "lift_name", "reps", "weight"]
  );
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

//TODO DELETE EXCERCISE ENDPOINT

module.exports = router;
