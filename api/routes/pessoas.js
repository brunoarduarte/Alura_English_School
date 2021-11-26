const router = require('express').Router();
const PessoaController = require('../controllers/PessoaController');

router.get('/', PessoaController.pegaTodasAsPessoas);
router.get('/:id', PessoaController.pegaUmaPessoa);
router.post('/', PessoaController.criaPessoa);
router.put('/:id', PessoaController.atualizaPessoa);
router.delete('/:id', PessoaController.apagaPessoa);
router.get('/:estudanteId/matriculas', PessoaController.pegaTodasAsMatriculas);
router.get('/:estudanteId/matriculas/:matriculaId', PessoaController.pegaUmaMatricula);
router.post('/:estudanteId/matriculas', PessoaController.criaMatricula);
router.put('/:estudanteId/matriculas/:matriculaId', PessoaController.atualizaMatricula);
router.delete('/:estudanteId/matriculas/:matriculaId', PessoaController.apagaMatricula);

module.exports = router;
