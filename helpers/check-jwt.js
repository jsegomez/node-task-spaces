const { request, response } = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model')

const checkJWT = async(req = request, res = response, next) => {
  const token = req.header('x-token');

  if(!token){
    return res.status(401).json({
      message: 'Debe iniciar sesión para continuar'
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
    const user = await User.findById(uid);

    if(!user){
      return res.status(400).json({
        message: 'Usuario no existe en DB'
      });
    }
    req.uid = uid;
    req.user = user;

    next();
  } catch (error) {
    res.status(401).json({
      message: 'Token no es válido'
    });
  }
}

module.exports = checkJWT;
