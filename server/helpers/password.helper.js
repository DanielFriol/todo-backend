const bcrypt = require("bcrypt");
const saltFactor = 10;

const hashPassword = async (password) => {
  return await bcrypt.hash(password, saltFactor);
};

const comparePassword = async (inputPassword, hashPassword) => {
  return await bcrypt.compare(inputPassword, hashPassword);
};

module.exports = {
  hashPassword,
  comparePassword,
};
