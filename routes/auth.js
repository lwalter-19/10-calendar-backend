/*
    Rutas de Usuarios /Auth
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const router  = Router();
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

router.post(
    '/new', 
    [ // Coleccion de middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6})
    ],
    crearUsuario );

router.post(
    '/',
    [// Colencion de errores middlewares
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password es obligatorio').not().isEmpty(),
        check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6})
    ],
    loginUsuario );

router.get('/renew', revalidarToken );

module.exports =  router;