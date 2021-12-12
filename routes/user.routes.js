const Router = require('express');
const router = Router();

const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const checkEmail = require('../helpers/unique-email');

// Methods in controller
const { getUsers, getUserById, create, update, deleteUser } = require('../controllers/user.controller');
const checkJWT = require('../helpers/check-jwt');

router.get('/', [
  checkJWT
],getUsers);

router.get('/:id', getUserById);

router.post('/', [
  check('name', 'Nombre debe tener al menos dos digitos').isLength({min: 2}),
  check('lastname', 'Apellido debe tener al menos dos digitos').isLength({min: 2}),
  check('email', 'Favor proporcionar un correo válido').isEmail().custom(checkEmail),
  check('password', 'Contraseña debe tener 8 digitos').isLength({min: 8}),
  validateFields
], create);

router.get('/:id', update);

router.get('/:id', deleteUser);

module.exports = router;


