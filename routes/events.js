const { Router } = require('express');
const router = Router();
const { validarJWT } = require('../middlewares/validar-jwt');

validarJWT();

// Todas tiene que pasar por JWT
// Crear una peticion para obtener eventos
router.get('/', getEventos);


router.post('/', crearEvento);


router.put('/:id', actualizarEvento);


router.delete('/:id', eliminarEvento);