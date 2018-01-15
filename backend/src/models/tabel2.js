module.exports = (sequelize, DataTypes) => {
  const Tabel2 = sequelize.define('Tabel2', {
    idFilm2:{
      type:DataTypes.INTEGER,
        allowNull: false,
  },
    actori:{
      type:DataTypes.STRING,
        allowNull: false,
    }
  });

    Tabel2.associate = (models) => {
        Tabel2.belongsTo(models.Tabel, {
            foreignKey: 'idFilm2',
            onDelete: 'CASCADE',
        });
    };
  return Tabel2;
};