'use strict';
module.exports = (sequelize, DataTypes) => {
  var Degree = sequelize.define('Degree', {
//    onetid: DataTypes.STRING,
//    type: DataTypes.STRING,
//    scaleabbrev: DataTypes.STRING,
    scalename: DataTypes.STRING,
    category: DataTypes.STRING,
    name: DataTypes.STRING(300)
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

  Degree.associate = (models) => {
    Degree.belongsToMany(models.Job, {
      through: 'JobDegree',
      foreignKeyConstraint: true
    });
};
  return Degree;
};
