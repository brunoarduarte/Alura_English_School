const database = require('../models');

class Services {
  constructor (model) {
    this.model = model;
  }

  async pegaTodosOsRegistros(where = {}) {
    return database[this.model].findAll({ where: { ...where } });
  }

  async pegaUmRegistro(where = {}) {
    return database[this.model].findOne({ where: { ...where } });
  }

  async pegaUmRegistroInativo(where = {}) {
    return database[this.model].scope('todos').findOne({ where: { ...where } });
  }

  async criaRegistro(dados) {
    return database[this.model].create(dados);
  }

  async atualizaRegistro(dadosAtualizados, id){
    return database.sequelize.transaction(async (transacao) => {
      await database[this.model]
      .update(dadosAtualizados, { where: { id: id } }, { transaction: transacao });
    });
  }

  async atualizaRegistros(dadosAtualizados, where, transacao = {}) {
    return database.sequelize.transaction(async (transacao) => {
      await database[this.model].update(dadosAtualizados, 
      { where: { ...where } },
      { transaction: transacao }
      )}
    );
  }

  async apagaRegistro(id) {
    return database[this.model].destroy({ where: { id: id }})
  }

  async restauraRegistro(id) {
    return database[this.model].restore({ where: { id: Number(id) } });
  }

  async consultaRegistroApagado(id) {
    return database[this.model]
      .findOne({ paranoid: false, where: { id: Number(id) } })
  }

  async encontraEContaRegistros(where = {}, agregadores) {
    return database[this.model]
      .findAndCountAll({ where: { ...where }, ...agregadores })
  }
}

module.exports = Services;