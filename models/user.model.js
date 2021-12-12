const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  name: {
    type: String,
    require: [true, 'Favor indicar nombre']
  },
  lastname: {
    type: String,
    require: [true, 'Favor indicar apellido']
  },
  email: {
    type: String,
    require: [true, 'Favor proporcionar email']
  },
  password: {
    type: String,
    require: [true, 'Favor indicar password']
  }
});

UserSchema.methods.toJSON = function(){
  // eslint-disable-next-line no-unused-vars
  const { __v, password, _id, ...user } = this.toObject();
  user.id = _id;
  return user;
}

module.exports = model('User', UserSchema);
