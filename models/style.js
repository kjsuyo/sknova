'use strict';
module.exports = (sequelize, DataTypes) => {
  var Style = sequelize.define('Style', {
    onetid: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
    Style.associate = (models) => {
      Style.belongsToMany(models.Job, {
        through: 'StyleKnowledge',
      });
  };
  return Style;
};
