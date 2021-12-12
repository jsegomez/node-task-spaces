const User = require('../models/user.model');

const checkEmail = async(email = '') => {
  const uniqueEmail = await User.findOne({ email });

  if(uniqueEmail){
    throw new Error(`Correo: ${email} ya se encuentra registrado`);
  }
}

module.exports = checkEmail;
