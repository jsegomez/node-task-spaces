/* eslint-disable no-unused-vars */
const { request, response } = require('express');
const bcrypt = require('bcrypt');

// Model
const User = require('../models/user.model');
const generateJWT = require('../helpers/generate-jwt');

const login = async(req = request, res = response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if(!user){
      return res.status(401).json({
        message: 'Usuario y/o contraseña invalido'
      });
    }

    const checkPassword = bcrypt.compareSync(password, user.password);

    if(!checkPassword){
      return res.status(401).json({
        message: 'Usuario y/o contraseña invalido'
      });
    }

    const token = await generateJWT(user.id);
    return res.status(200).json({token, user});
  } catch (error) {
    return res.status(500).json({error});
  }
}


module.exports = { login }
