const mysql = require("mysql");
const settings = require("./settings");
var db;
const connectDatabase = () => {
  if (!db) {
    db = mysql.createConnection(settings);
    db.connect();
  }
  return db;
};
module.exports = connectDatabase();
