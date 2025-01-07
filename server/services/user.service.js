const UserRepository = require("../repositories/user.repository.js");
const { hashPassword } = require("../helpers/password.helper.js");
const UserDto = require("../presentation/dto/user.dto.js");
const UserAlreadyExistsError = require("./errors/user-already-exists.error.js");
const NotFoundError = require("./errors/not-found.error.js");

class UserService {
  async create(user) {
    const existingUser = await UserRepository.getByEmail(user.email);

    if (existingUser) {
      throw new UserAlreadyExistsError("User with this email already exists");
    }

    user.password = await hashPassword(user.password);
    const newUser = await UserRepository.create(user);
    return new UserDto(newUser);
  }

  async getByEmail(email) {
    const user = await UserRepository.getByEmail(email);
    
    if (!user) {
      throw new NotFoundError("User not found");
    }

    return new UserDto(user);
  }
}

module.exports = new UserService();
