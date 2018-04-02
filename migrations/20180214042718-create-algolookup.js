'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Algolookups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      con_1: {
        type: Sequelize.FLOAT
      },
      con_2: {
        type: Sequelize.FLOAT
      },
      con_3: {
        type: Sequelize.FLOAT
      },
      con_4: {
        type: Sequelize.FLOAT
      },
      con_5: {
        type: Sequelize.FLOAT
      },
      con_6: {
        type: Sequelize.FLOAT
      },
      con_7: {
        type: Sequelize.FLOAT
      },
      con_8: {
        type: Sequelize.FLOAT
      },
      con_9: {
        type: Sequelize.FLOAT
      },
      con_10: {
        type: Sequelize.FLOAT
      },
      con_11: {
        type: Sequelize.FLOAT
      },
      con_12: {
        type: Sequelize.FLOAT
      },
      con_13: {
        type: Sequelize.FLOAT
      },
      con_14: {
        type: Sequelize.FLOAT
      },
      con_15: {
        type: Sequelize.FLOAT
      },
      con_16: {
        type: Sequelize.FLOAT
      },
      con_17: {
        type: Sequelize.FLOAT
      },
      con_18: {
        type: Sequelize.FLOAT
      },
      con_19: {
        type: Sequelize.FLOAT
      },
      con_20: {
        type: Sequelize.FLOAT
      },
      con_21: {
        type: Sequelize.FLOAT
      },
      con_22: {
        type: Sequelize.FLOAT
      },
      con_23: {
        type: Sequelize.FLOAT
      },
      con_24: {
        type: Sequelize.FLOAT
      },
      con_25: {
        type: Sequelize.FLOAT
      },
      con_26: {
        type: Sequelize.FLOAT
      },
      con_27: {
        type: Sequelize.FLOAT
      },
      con_28: {
        type: Sequelize.FLOAT
      },
      con_29: {
        type: Sequelize.FLOAT
      },
      con_30: {
        type: Sequelize.FLOAT
      },
      con_31: {
        type: Sequelize.FLOAT
      },
      con_32: {
        type: Sequelize.FLOAT
      },
      con_33: {
        type: Sequelize.FLOAT
      },
      con_34: {
        type: Sequelize.FLOAT
      },
      con_35: {
        type: Sequelize.FLOAT
      },
      con_36: {
        type: Sequelize.FLOAT
      },
      con_37: {
        type: Sequelize.FLOAT
      },
      con_38: {
        type: Sequelize.FLOAT
      },
      con_39: {
        type: Sequelize.FLOAT
      },
      con_40: {
        type: Sequelize.FLOAT
      },
      con_41: {
        type: Sequelize.FLOAT
      },
      con_42: {
        type: Sequelize.FLOAT
      },
      con_43: {
        type: Sequelize.FLOAT
      },
      con_44: {
        type: Sequelize.FLOAT
      },
      con_45: {
        type: Sequelize.FLOAT
      },
      con_46: {
        type: Sequelize.FLOAT
      },
      con_47: {
        type: Sequelize.FLOAT
      },
      con_48: {
        type: Sequelize.FLOAT
      },
      con_49: {
        type: Sequelize.FLOAT
      },
      con_50: {
        type: Sequelize.FLOAT
      },
      con_51: {
        type: Sequelize.FLOAT
      },
      con_52: {
        type: Sequelize.FLOAT
      },
      con_53: {
        type: Sequelize.FLOAT
      },
      con_54: {
        type: Sequelize.FLOAT
      },
      con_55: {
        type: Sequelize.FLOAT
      },
      con_56: {
        type: Sequelize.FLOAT
      },
      con_57: {
        type: Sequelize.FLOAT
      },
      int_1: {
        type: Sequelize.FLOAT
      },
      int_2: {
        type: Sequelize.FLOAT
      },
      int_3: {
        type: Sequelize.FLOAT
      },
      int_4: {
        type: Sequelize.FLOAT
      },
      int_5: {
        type: Sequelize.FLOAT
      },
      int_6: {
        type: Sequelize.FLOAT
      },
      val_1: {
        type: Sequelize.FLOAT
      },
      val_2: {
        type: Sequelize.FLOAT
      },
      val_3: {
        type: Sequelize.FLOAT
      },
      val_4: {
        type: Sequelize.FLOAT
      },
      val_5: {
        type: Sequelize.FLOAT
      },
      val_6: {
        type: Sequelize.FLOAT
      },
      sty_1: {
        type: Sequelize.FLOAT
      },
      sty_2: {
        type: Sequelize.FLOAT
      },
      sty_3: {
        type: Sequelize.FLOAT
      },
      sty_4: {
        type: Sequelize.FLOAT
      },
      sty_5: {
        type: Sequelize.FLOAT
      },
      sty_6: {
        type: Sequelize.FLOAT
      },
      sty_7: {
        type: Sequelize.FLOAT
      },
      sty_8: {
        type: Sequelize.FLOAT
      },
      sty_9: {
        type: Sequelize.FLOAT
      },
      sty_10: {
        type: Sequelize.FLOAT
      },
      sty_11: {
        type: Sequelize.FLOAT
      },
      sty_12: {
        type: Sequelize.FLOAT
      },
      sty_13: {
        type: Sequelize.FLOAT
      },
      sty_14: {
        type: Sequelize.FLOAT
      },
      sty_15: {
        type: Sequelize.FLOAT
      },
      sty_16: {
        type: Sequelize.FLOAT
      },
      abi_1: {
        type: Sequelize.FLOAT
      },
      abi_2: {
        type: Sequelize.FLOAT
      },
      abi_3: {
        type: Sequelize.FLOAT
      },
      abi_4: {
        type: Sequelize.FLOAT
      },
      abi_5: {
        type: Sequelize.FLOAT
      },
      abi_6: {
        type: Sequelize.FLOAT
      },
      abi_7: {
        type: Sequelize.FLOAT
      },
      abi_8: {
        type: Sequelize.FLOAT
      },
      abi_9: {
        type: Sequelize.FLOAT
      },
      abi_10: {
        type: Sequelize.FLOAT
      },
      abi_11: {
        type: Sequelize.FLOAT
      },
      abi_12: {
        type: Sequelize.FLOAT
      },
      abi_13: {
        type: Sequelize.FLOAT
      },
      abi_14: {
        type: Sequelize.FLOAT
      },
      abi_15: {
        type: Sequelize.FLOAT
      },
      abi_16: {
        type: Sequelize.FLOAT
      },
      abi_17: {
        type: Sequelize.FLOAT
      },
      abi_18: {
        type: Sequelize.FLOAT
      },
      abi_19: {
        type: Sequelize.FLOAT
      },
      abi_20: {
        type: Sequelize.FLOAT
      },
      abi_21: {
        type: Sequelize.FLOAT
      },
      abi_22: {
        type: Sequelize.FLOAT
      },
      abi_23: {
        type: Sequelize.FLOAT
      },
      abi_24: {
        type: Sequelize.FLOAT
      },
      abi_25: {
        type: Sequelize.FLOAT
      },
      abi_26: {
        type: Sequelize.FLOAT
      },
      abi_27: {
        type: Sequelize.FLOAT
      },
      abi_28: {
        type: Sequelize.FLOAT
      },
      abi_29: {
        type: Sequelize.FLOAT
      },
      abi_30: {
        type: Sequelize.FLOAT
      },
      abi_31: {
        type: Sequelize.FLOAT
      },
      abi_32: {
        type: Sequelize.FLOAT
      },
      abi_33: {
        type: Sequelize.FLOAT
      },
      abi_34: {
        type: Sequelize.FLOAT
      },
      abi_35: {
        type: Sequelize.FLOAT
      },
      abi_36: {
        type: Sequelize.FLOAT
      },
      abi_37: {
        type: Sequelize.FLOAT
      },
      abi_38: {
        type: Sequelize.FLOAT
      },
      abi_39: {
        type: Sequelize.FLOAT
      },
      abi_40: {
        type: Sequelize.FLOAT
      },
      abi_41: {
        type: Sequelize.FLOAT
      },
      abi_42: {
        type: Sequelize.FLOAT
      },
      abi_43: {
        type: Sequelize.FLOAT
      },
      abi_44: {
        type: Sequelize.FLOAT
      },
      abi_45: {
        type: Sequelize.FLOAT
      },
      abi_46: {
        type: Sequelize.FLOAT
      },
      abi_47: {
        type: Sequelize.FLOAT
      },
      abi_48: {
        type: Sequelize.FLOAT
      },
      abi_49: {
        type: Sequelize.FLOAT
      },
      abi_50: {
        type: Sequelize.FLOAT
      },
      abi_51: {
        type: Sequelize.FLOAT
      },
      abi_52: {
        type: Sequelize.FLOAT
      },
      jobId: {
        type: Sequelize.INTEGER
      },
      jobTitle: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Algolookups');
  }
};
