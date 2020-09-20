const express = require("express");
const cors = require("cors");
const passport = require("passport");
const { getAllUsers, createUser, updateUser, deleteUser, login } = require("./src/routes");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

// Passport Configuration
require("./src/middleware/passport")(passport);
//DB connection

require("./src/database/connection")

//Routes
const route = require("./src/routes")()
route.get("/users", getAllUsers);
route.post("/newUser", createUser);
route.put("/updateUser/:id", updateUser);
route.get("/deleteUser/:id", deleteUser);
route.get("/login", login);
//run server
const port = process.env.PORT || 5000;
app.listen(port, (err) =>
  err ? console.log(err) : console.log(`Server connected on port ${port} ...`)
);
