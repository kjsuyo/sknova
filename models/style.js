'use strict';
module.exports = (sequelize, DataTypes) => {
  var Style = sequelize.define('Style', {
//    onetid: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING
  },
  {
    timestamps: false
  },
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
    Style.associate = (models) => {
      Style.belongsToMany(models.Job, {
        through: 'JobStyle',
        foreignKey: 'styleId'
      });
  };
  return Style;
};
