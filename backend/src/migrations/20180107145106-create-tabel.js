module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tabels', {
      idFilm: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      denumireFilm: {
        type: Sequelize.STRING
      },
      dataFilm: {
        type: Sequelize.STRING
      },
      oraFilm: {
        type: Sequelize.STRING
      },
      pretBilet: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tabels');
  }
};