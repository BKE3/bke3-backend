const bcrypt = require('bcrypt');
const User = require('../models/User');
// const jwt = require('jsonwebtoken');

module.exports = class UserService {
  static async create({ email, password }) {
    console.log(process.env.SALT_ROUNDS, 'salts');
    const passwordHash = await bcrypt.hash(
      password,
      Number(process.env.SALT_ROUNDS)
    );

    const user = await User.insert({
      email,
      passwordHash,
    });
    return user;
  }
};
