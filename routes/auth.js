/*
    Rutas de Usuarios /Auth
    host + /api/auth
*/

const { Router, request } = require('express');
const { check } = require('express-validator');
const router  = Router();
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

router.post(
    '/new', 
    [ // Coleccion de middlewares DBUSER->MERN_USER PASSWORD->wttId7rRCdA6Xjzb
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6}),
        validarCampos
    ],
    crearUsuario );

router.post(
    '/',
    [// Colencion de errores middlewares ->  sy4AeM1RjWM2AbwO
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password es obligatorio').not().isEmpty(),
        check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6}),
        validarCampos
    ],
    loginUsuario );

router.get('/renew', validarJWT, revalidarToken );

module.exports =  router;