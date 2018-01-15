module.exports = (sequelize, DataTypes) => {
  const Tabel1 = sequelize.define('Tabel1', {
    idFilm1:{
      type:DataTypes.INTEGER,
        allowNull: false,
    },
    anAparitie: {
      type:DataTypes.STRING,
       allowNull: false,
    },
    descriere:{
      type:DataTypes.STRING,
        allowNull: false,
    },
    gen:{
      type:DataTypes.STRING,
        allowNull: false,
    },
    nota:{
      type:DataTypes.STRING,
        allowNull: false,
    },
  });

    Tabel1.associate = (models) => {
        Tabel1.belongsTo(models.Tabel, {
            foreignKey: 'idFilm1',
            onDelete: 'CASCADE',
        });
    };
  return Tabel1;
};