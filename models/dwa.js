'use strict';
module.exports = (sequelize, DataTypes) => {
  var Dwa = sequelize.define('Dwa', {
    onetid: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });


    Dwa.associate = (models) => {
    Dwa.belongsTo(models.Iwa, {
      foreignKey: 'iwaId',
    });
  };

  return Dwa;
};
