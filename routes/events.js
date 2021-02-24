/*  
    Event Routers
    path -> /api/events
*/
const { Router } = require('express');
const router = Router();
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');


// Todas tiene que pasar por JWT
router.use( validarJWT );

// Crear una peticion para obtener eventos
router.get('/', getEventos);


router.post('/', crearEvento);


router.put('/:id',  actualizarEvento);


router.delete('/:id', eliminarEvento);

module.exports = router