const express = require("express");
const app = express();
const port = 3000;
require("dotenv").config({ path: "./config/.env" });
const mongoose = require("mongoose");
const UserRoutes = require("./routes/user");

app.get("/", (req, res) => res.send("Welcome to Fimat Group Api"));

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}!`);
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());
//connect to database
//not change the Username

mongoose
  .connect(
    "mongodb+srv://evansJean:Azerty0987@cluster0.a2k1t6d.mongodb.net/fimat?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((res) => console.log(`database connecting ${res}`))
  .catch((err) => console.log(`connection failed ${err.message}`));

app.use(UserRoutes);
