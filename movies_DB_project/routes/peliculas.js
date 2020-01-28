var express = require('express');
var router = express.Router();
var peliculasController = require ("../controllers/peliculasController")


router.get ('/', peliculasController.listado);
//CREACION
router.get ('/crear', peliculasController.crear);
router.post ('/crear', peliculasController.guardado);

//DETALLE
router.get ('/:id', peliculasController.detalle);

//EDITAR
router.get ('/editar/:id', peliculasController.editar);
router.post ('/editar/:id', peliculasController.actualizar);

//BORRAR
router.post ('/borrar/:id', peliculasController.borrar);

module.exports = router;