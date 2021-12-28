const router = require('express').Router();
const NivelController = require('../controllers/NivelController');

router.get('/', NivelController.pegaTodosOsNiveis);
router.get('/:id', NivelController.pegaUmNivel);
router.post('/', NivelController.criaNivel);
router.put('/:id', NivelController.atualizaNivel);
router.delete('/:id', NivelController.apagaNivel);
router.post('/:id/restaura', NivelController.restauraNivel);

module.exports = router;
