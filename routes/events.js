/*  
    Event Routers
    path -> /api/events
*/
const { Router } = require('express');
const router = Router();
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');


// Todas tiene que pasar por JWT
router.use( validarJWT );

// Crear una peticion para obtener eventos
router.get('/', getEventos);


router.post(
    '/', 
    [ // validar nuestro campos
        check('title', 'El titulo es obligatori').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'Fecha de finalizacion es obligatoria').custom( isDate ),
        validarCampos
    ],
    crearEvento
);


router.put('/:id',  actualizarEvento);


router.delete('/:id', eliminarEvento);

module.exports = router