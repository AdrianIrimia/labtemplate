module.exports = (sequelize, DataTypes) => {
  const Tabel = sequelize.define('Tabel', {
      idFilm: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      denumireFilm: {
        type:DataTypes.STRING,
        allowNull: false,
      },
      dataFilm:{
        type:DataTypes.STRING,
        allowNull: false,
      },
     oraFilm:{
       type: DataTypes.STRING,
       allowNull: false,
      },
      pretBilet: {
        type:DataTypes.STRING,
        allowNull: false,
      },

  });
  Tabel.associate = (models) => {
      Tabel.hasMany(models.Tabel1 , {
          foreignKey: 'idFilm1',
          as: 'tabel1s',
      }),
      Tabel.hasMany(models.Tabel2 , {
          foreignKey: 'idFilm2',
           as: 'tabel2s',
       })
  };

  return Tabel;
};