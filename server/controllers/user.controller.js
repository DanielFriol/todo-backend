const newUserSchema = require("../schemas/user/new-user.schema");
const userService = require("../services/user.service");

class UserController {
  async create(req, res) {
    try {
      const { body } = req;
      const validation = newUserSchema.safeParse(body);

      if (!validation.success) {
        return res.status(400).json(validation.error);
      }

      const user = await userService.create(validation.data);
      res.status(201).json(user);
    } catch (e) {
      if (e.name === "UserAlreadyExistsError") {
        return res.status(400).json({ message: e.message });
      }
      res.status(500).json(e);
    }
  }

  async getByEmail(req, res) {
    try {
      const { email } = req.params;
      const user = await userService.getByEmail(email);
      res.status(200).json(user);
    } catch (e) {
      console.log(e)
      if (e.name === "NotFoundError") {
        return res.status(404).json({ message: e.message });
      }
      res.status(500).json(e);
    }
  }
}

module.exports = new UserController();
