const router = require('express').Router();
const PessoaController = require('../controllers/PessoaController');
const MatriculaController = require('../controllers/MatriculaControlles');


router.get('/', PessoaController.pegaTodasAsPessoas)
  .get('/ativas', PessoaController.pegaPessoasAtivas)
  .get('/:id', PessoaController.pegaUmaPessoa)
  .get('/:id/inativa', PessoaController.pegaUmaPessoaInativa)
  .post('/', PessoaController.criaPessoa)
  .put('/:id', PessoaController.atualizaPessoa)
  .delete('/:id', PessoaController.apagaPessoa)
  .post('/:id/restaura', PessoaController.restauraPessoa)
  .post('/:estudanteId/cancela', PessoaController.cancelaPessoa)
  .get('/:estudanteId/matriculas', PessoaController.pegaMatriculas)
  .get('/:estudanteId/matriculas/:matriculaId', MatriculaController.pegaUmaMatricula)
  .get('/matricula/:turmaId/confirmadas', MatriculaController.pegaMatriculasPorTurma)
  .get('/matricula/lotada', MatriculaController.pegaTurmasLotadas)
  .post('/:estudanteId/matriculas', MatriculaController.criaMatricula)
  .put('/matriculas/:matriculaId', MatriculaController.atualizaMatricula)
  .delete('/:estudanteId/matriculas/:matriculaId', MatriculaController.apagaMatricula)
  .post('/:estudanteId/matriculas/:matriculaId/restaura', MatriculaController.restauraMatricula);

module.exports = router;
