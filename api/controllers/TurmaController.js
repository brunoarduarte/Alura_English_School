const database = require('../models');

class TurmaController {

  static async pegaTodosAsTurmas(_req, res) {
    try {
      const todosAsTurmas = await database.Turmas.findAll()
      return res.status(200).json(todosAsTurmas)
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

  static async pegaUmaTurma(req, res) {
    const { id } = req.params;
    try {
      const umaTurma = await database.Turmas.findOne({ 
        where: {
          id: Number(id) 
        }
      });
      return res.status(200).json(umaTurma);
    } catch (error) {
      return res.status(404).json(error.message);
    }
  };

  static async criaTurma(req, res) {
    const novaTurma = req.body;
    try {
      const novaTurmaCriada = await database.Turmas.create(novaTurma);
      return res.status(201).json(novaTurmaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

  static async atualizaTurma(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await database.Turmas.update(novasInfos, { 
        where: {
          id: Number(id)
        }
    });
      const turmaAtualizada = await database.Turmas.findOne({ 
        where: { 
          id: Number(id) 
        } 
      });
      return res.status(200).json(turmaAtualizada);
    } catch (error) {
      return res.status(404).json(error.message);
    }
  };

  static async apagaTurma(req, res) {
    const { id } = req.params;
    try {
      await database.Turmas.destroy({ 
        where: { 
          id: Number(id) 
        } 
      });
      res.status(200).json({ message: `Id ${id} deletado com sucesso!` });
    } catch (error) {
      return res.status(404).json(error.message);
    }
  };
};

module.exports = TurmaController;