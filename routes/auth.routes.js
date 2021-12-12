const Router = require('express');
const router = Router();

const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');

const { login } = require('../controllers/auth.controller');

router.post('/login', [
    check('email', 'Favor proporcionar un correo electrónico válido').isEmail(),
    check('password', 'Contraseña debe tener al menos 8 caracteres').isLength({ min: 8 }),
    validateFields
], login);

module.exports = router;
