/* eslint-disable no-unused-vars */
const { request, response } = require('express');
const bcrypt = require('bcrypt');

// Model
const User = require('../models/user.model');

const getUsers = async(req = request, res = response) => {
  try {
    const users = await User.find();

    return res.status(200).json({
      users
    });
  } catch (error) {
    return res.status(500).json(error);
  }
}

const getUserById = async(req = request, res = response) => {}

const create = async(req = request, res = response) => {
  const { name, lastname, email, password } = req.body;
  const user = new User({name, lastname, email, password});

  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(password, salt);

  const newUser = await user.save();

  res.status(200).json({
    user: newUser
  });
}

const update = async(req = request, res = response) => {}

const deleteUser = async(req = request, res = response) => {}

module.exports = {
  getUsers,
  getUserById,
  create,
  update,
  deleteUser
}
