const router = require('express').Router();
const PessoaController = require('../controllers/PessoaController');

router.get('/', PessoaController.pegaPessoasAtivas);
router.get('/todos', PessoaController.pegaTodasAsPessoas);
router.get('/:id', PessoaController.pegaUmaPessoa);
router.get('/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurma);
router.get('/matricula/lotada', PessoaController.pegaTurmasLotadas);
router.post('/', PessoaController.criaPessoa);
router.put('/:id', PessoaController.atualizaPessoa);
router.delete('/:id', PessoaController.apagaPessoa);
router.post('/:id/restaura', PessoaController.restauraPessoa);
router.get('/:estudanteId/matricula', PessoaController.pegaMatriculas);
router.get('/:estudanteId/matriculas', PessoaController.pegaTodasAsMatriculas);
router.get('/:estudanteId/matriculas/:matriculaId', PessoaController.pegaUmaMatricula);
router.post('/:estudanteId/matriculas', PessoaController.criaMatricula);
router.put('/:estudanteId/matriculas/:matriculaId', PessoaController.atualizaMatricula);
router.delete('/:estudanteId/matriculas/:matriculaId', PessoaController.apagaMatricula);
router.post('/:estudanteId/matriculas/:matriculaId/restaura', PessoaController.restauraMatricula);

module.exports = router;
