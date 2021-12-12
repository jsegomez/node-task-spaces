const mongoose = require('mongoose');

const dbConnection = async() => {
  try {
    await mongoose.connect(process.env.MONGOURL, {
      user: process.env.MONGOUSER,
      pass: process.env.MONGOPASS,
      dbName: process.env.MONGODATABASE
    });

    // eslint-disable-next-line no-console
    console.log('Conectado a base de datos');
  } catch (error) {
    throw new Error('Error al conectarse a base de datos');
  }
}


module.exports = { dbConnection };
