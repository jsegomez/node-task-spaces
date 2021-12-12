const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config.db');

class Server{
  constructor(){
    this.app = express();
    this.port = process.env.PORT;
    this.userPath = '/api/users';
    this.authPath = '/api/auth';

    this.database();

    this.middlewares();

    this.routes();
  }

  middlewares(){
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes(){
    this.app.use(this.userPath, require('../routes/user.routes'));
    this.app.use(this.authPath, require('../routes/auth.routes'));
  }

  async database(){
    await dbConnection();
  }

  listen(){
    this.app.listen(this.port, () => {
      // eslint-disable-next-line no-console
      console.log(`Servidor corriendo en puerto ${this.port}`)
    });
  }
}


module.exports = Server
