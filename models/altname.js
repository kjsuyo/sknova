'use strict';
module.exports = (sequelize, DataTypes) => {
  var Altname = sequelize.define('Altname', {
    name: DataTypes.STRING
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
  Altname.associate = (models) => {
    Altname.belongsTo(models.Job, {
      foreignKey: 'jobId',
      foreignKeyConstraint: true
    });
};
  return Altname;
};
