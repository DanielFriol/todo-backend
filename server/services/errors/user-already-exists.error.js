function UserAlreadyExistsError(message = "") {
    this.name = "UserAlreadyExistsError";
    this.message = message;
}
UserAlreadyExistsError.prototype = Error.prototype;

module.exports = UserAlreadyExistsError;