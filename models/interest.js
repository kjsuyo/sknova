'use strict';
module.exports = (sequelize, DataTypes) => {
  var Interest = sequelize.define('Interest', {
    onetid: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING(350)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Interest.associate = (models) => {
    Interest.belongsToMany(models.Job, {
      through: 'JobInterest',
    });
};
  return Interest;
};
