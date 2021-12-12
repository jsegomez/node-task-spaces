const jwt = require('jsonwebtoken');

const generateJWT = (uid = '') => {
  return new Promise((resolve, reject) => {
    const payload = { uid };

    jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
      expiresIn: '1h'
    }, (err, token) => {
      if (err) {

        // eslint-disable-next-line no-console
        console.log(err);
        reject('No se pudo generar JWT');
      }else{
        resolve(token);
      }
    });
  })
}


module.exports = generateJWT;
