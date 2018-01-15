module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tabel1s', {
      idFilm1: {
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: Sequelize.INTEGER,
       onDelete: 'CASCADE',
          references: {
              model: 'Tabels',
              key: 'idFilm',
              as: 'idFilm1',
          },

      },
      anAparitie: {
        type: Sequelize.STRING
      },
      descriere: {
        type: Sequelize.STRING
      },
      gen: {
        type: Sequelize.STRING
      },
      nota: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tabel1s');
  }
};