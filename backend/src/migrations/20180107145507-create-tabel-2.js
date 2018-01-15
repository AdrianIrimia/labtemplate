module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tabel2s', {
      idFilm2: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
          references: {
              model: 'Tabels',
              key: 'idFilm',
              as: 'idFilm2',
          },

      },
      actori: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tabel2s');
  }
};