const { User } = require('../../models');

const createError = require('http-errors');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

require('dotenv').config();

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const payload = { id: user._id, email };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1d' });

    await User.findByIdAndUpdate(user._id, { token });

    return res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        token,
        user: {
          name: user.name,
          surname: user.surname,
          email: user.email,
          savedJobs: user.savedJobs,
        },
      },
    });
  }
  throw createError(401, 'Invalid credentials');
};

module.exports = login;
