const route = require("express").Router();
const UserController = require("../controllers/user.controller");

route.get("/:email", (req, res) => {
  return UserController.getByEmail(req, res);
});

route.post("/", (req, res) => {
  return UserController.create(req, res);
});

module.exports = route;
