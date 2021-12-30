const database = require('../models');
const Services = require('./Services');

class MatriculasServices extends Services {
  constructor() {
    super('Matriculas');
  }

  async atualizaMatricula(dadosAtualizados, id) {
    return database.sequelize.transaction(async (transacao) => {
      await database[this.model]
      .update(dadosAtualizados, { where: { id } }, { transaction: transacao });
    });
  }
}

module.exports = MatriculasServices;
