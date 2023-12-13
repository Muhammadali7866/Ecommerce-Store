const mongoose = require("mongoose");

const databaseUrl = process.env.database.replace(
  "<password>",
  process.env.database_password
);

mongoose
  .connect(databaseUrl)
  .then((err) => {
    console.log("Database is conncted");
  })
  .catch((error) => {
    console.error(error.message);
  });
