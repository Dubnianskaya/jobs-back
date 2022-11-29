const { User } = require('../../models');

const createError = require('http-errors');

const bcrypt = require('bcrypt');

const register = async (req, res) => {
  const { email, password, name, surname } = req.body;

  let user = await User.findOne({ email });

  if (user) {
    throw createError(409, 'This email address is already being used!');
  }

  const encryptedPassword = await bcrypt.hash(password, 10);

  user = await User.create({
    email,
    name,
    surname,
    password: encryptedPassword,
  });

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      name: user.name,
      surname: user.surname,
      email: user.email,
    },
  });
};

module.exports = register;
