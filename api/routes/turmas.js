const router = require('express').Router();
const TurmaController = require('../controllers/TurmaController');

router.get('/', TurmaController.pegaTodosAsTurmas);
router.get('/:id', TurmaController.pegaUmaTurma);
router.post('/', TurmaController.criaTurma);
router.put('/:id', TurmaController.atualizaTurma);
router.delete('/:id', TurmaController.apagaTurma);
router.post('/:id/restaura', TurmaController.restauraTurma);

module.exports = router;
