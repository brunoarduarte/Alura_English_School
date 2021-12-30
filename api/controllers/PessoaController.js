// const { Sequelize } = require('../models');
// const database = require('../models');

const { PessoasServices, MatriculasServices } = require('../services');
const pessoasServices = new PessoasServices();


class PessoaController {
  static async pegaPessoasAtivas(req, res) {
    try {
      const pessoasAtivas = await pessoasServices.pegaRegistrosAtivos();
      return res.status(200).json(pessoasAtivas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

  static async pegaTodasAsPessoas(req, res) {
    try {
      const todasAsPessoas = await pessoasServices.pegaTodosOsRegistros();
      return res.status(200).json(todasAsPessoas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

  static async pegaUmaPessoa(req, res) {
    const { id } = req.params;
    try {
      const umaPessoa = await pessoasServices.pegaUmRegistro({ id: Number(id) });
      return res.status(200).json(umaPessoa);
    } catch (error) {
      return res.status(404).json(error.message);
    }
  };

  static async pegaUmaPessoaInativa(req, res) {
    const { id } = req.params;
    try {
      const umaPessoa = await pessoasServices.pegaUmRegistroInativo({ id: Number(id) });
      return res.status(200).json(umaPessoa);
    } catch (error) {
      return res.status(404).json(error.message);
    }
  };

  static async criaPessoa(req, res) {
    const novaPessoa = req.body;
    try {
      const novaPessoaCriada = await pessoasServices.criaRegistro(novaPessoa);
      return res.status(201).json(novaPessoaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

  static async atualizaPessoa(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      const pessoa = await pessoasServices.atualizaPessoa(novasInfos, Number(id));
      return res.status(200).json(pessoa);
    } catch (error) {
      return res.status(404).json(error.message);
    }
  };

  static async apagaPessoa(req, res) {
    const { id } = req.params;
    try {
      await pessoasServices.apagaRegistro(Number(id));
      res.status(200).json({ message: `Id ${id} deletado com sucesso!` });
    } catch (error) {
      return res.status(404).json(error.message);
    }
  };

  static async restauraPessoa (req, res) {
    const { id } = req.params;
    try {
      await pessoasServices.restauraRegistro(id);
      return res.status(200).json({ message: `id ${id} restaurado` })
    } catch (error) {
      return res.status(404).json(error.message);
    }
  }

  static async pegaMatriculas(req, res) {  
    const { estudanteId } = req.params
    try {
      const matriculas = await pessoasServices
        .pegaMatriculasPorEstudante({ id: Number(estudanteId) })
      return res.status(200).json(matriculas)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async cancelaPessoa(req, res) {
    const { estudanteId } = req.params;
    try {
      await pessoasServices.cancelaPessoaEMatriculas(Number(estudanteId));
      return res.status(201).json({ message: `Matrículas ref. estudante ${estudanteId} canceladas`});
    } catch (error) {
      return res.status(404).json(error.message);
    }
  };
};

module.exports = PessoaController;