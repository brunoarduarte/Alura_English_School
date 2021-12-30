const database = require('../models');
const Services = require('../services/Services');

class PessoasServices extends Services {
  constructor() {
    super('Pessoas');
    this.matriculas = new Services('Matriculas');
  }

  async pegaRegistrosAtivos(where = {}) {
    return database[this.model].findAll({ where: { ...where } });
  };

  async pegaTodosOsRegistros(where = {}) {
    return database[this.model].scope('todos').findAll({ where: { ...where } });
  };

  async atualizaPessoa(dadosAtualizados, id){
    return database.sequelize.transaction(async (transacao) => {
      await database[this.model].scope('todos')
      .update(dadosAtualizados, { where: { id: id } }, { transaction: transacao });
    });
  }

  async cancelaPessoaEMatriculas(estudanteId) {
    return database.sequelize.transaction(async (transacao) => {
      await super.atualizaRegistro({ ativo: false }, estudanteId,
        { transaction: transacao });
      await this.matriculas.atualizaRegistros({ status: 'cancelado' },
      { estudante_id: Number(estudanteId) },
      { transaction: transacao });
    })
  };

  async pegaMatriculasPorEstudante(where = {}) {
    const matriculas = await database[this.model]
      .findOne({ where: { ...where } })
    return matriculas.getAulasMatriculadas()
  }

}

module.exports = PessoasServices;
