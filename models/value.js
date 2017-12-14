'use strict';
module.exports = (sequelize, DataTypes) => {
  var Value = sequelize.define('Value', {
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
    Value.associate = (models) => {
      Value.belongsToMany(models.Job, {
        through: 'JobValue',
        foreignKey: 'valueId'
      });
  };
  return Value;
};
