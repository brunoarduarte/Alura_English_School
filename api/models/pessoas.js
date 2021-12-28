'use strict';

module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    nome: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function(nome) {
          if (nome.length < 3) throw new Error('O nome deve ter mais de 3 caracteres')
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: { 
        isEmail: { 
          args: true,
          msg: 'Email inválido!'
        }
      }
    },
    role: DataTypes.STRING
  }, { 
    paranoid: true,
    defaultScope: {
      where: { ativo: true }
    },
    scopes: {
      todos: { Where: { } }
      //etc: { constraint: valor }
    }
  });
  Pessoas.associate = function(models) {
    Pessoas.hasMany(models.Turmas, {
      foreignKey: 'docente_id'
    });
    Pessoas.hasMany(models.Matriculas, {
      foreignKey: 'estudante_id',
      scope: { status: 'confirmado' },
      as: 'aulasMatriculadas'
    });
  };
  return Pessoas;
};
