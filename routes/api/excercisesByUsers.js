const express = require("express");
const router = express.Router();
const db = require("../../database/db");

router.get("/:id", (req, res) => {
  const sql = `SELECT * FROM excercises 
   WHERE user_id = ${req.params.id} 
   ORDER BY excercises.date`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.get("/:id/by_muscleGroup/:group", (req, res) => {
  const sql = `SELECT * FROM excercises
     WHERE user_id = ${req.params.id} 
     AND muscle_group = '${req.params.group}'
     ORDER BY excercises.date`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.get("/:id/by_liftName/:name", (req, res) => {
  const sql = `SELECT * FROM excercises
       WHERE user_id = ${req.params.id} 
       AND lift_name = '${req.name}'
       ORDER BY excercises.date`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;
