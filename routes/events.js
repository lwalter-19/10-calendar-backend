/*  
    Event Routers
    path -> /api/events
*/
const { Router } = require('express');
const router = Router();
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');


// Todas tiene que pasar por JWT
// Crear una peticion para obtener eventos
router.get('/', validarJWT, getEventos);


router.post('/', validarJWT, crearEvento);


router.put('/:id', validarJWT,  actualizarEvento);


router.delete('/:id', validarJWT, eliminarEvento);

module.exports = router