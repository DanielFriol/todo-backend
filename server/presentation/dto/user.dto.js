class UserDto {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.created_date = user.created_date;
    this.updated_date = user.updated_date;
  }
}

module.exports = UserDto;
