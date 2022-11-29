const { Schema, model } = require('mongoose');

const Joi = require('joi');

const userSchema = Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    name: {
      type: String,
      minLength: 3,
      maxLength: 60,
      required: [true, 'Name is required'],
    },
    surname: {
      type: String,
      minLength: 3,
      maxLength: 60,
      required: [true, 'Surname is required'],
    },
    savedJobs: {
      type: Array,
      default: [],
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true },
);

const User = model('user', userSchema);

const joiRegisterSchema = Joi.object({
  name: Joi.string().min(3).max(60).required(),
  surname: Joi.string().min(3).max(60).required(),
  password: Joi.string().min(8).max(32).required(),
  email: Joi.string().email().required(),
});

const joiLoginSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
});

const joiSavedJobsSchema = Joi.object({
  savedJobs: Joi.array().items(Joi.string())
})

module.exports = { User, joiRegisterSchema, joiLoginSchema, joiSavedJobsSchema };
