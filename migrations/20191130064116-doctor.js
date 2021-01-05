'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

     return queryInterface.createTable('doctors',{
    d_id :{
    primaryKey:true,
    autoIncrement:true,
    type:Sequelize.INTEGER,
    allowNull:false,
    },
    d_name:{
    type:Sequelize.STRING,
    allowNull:false
    },
    d_phonenum:{
    type:Sequelize.INTEGER,
    allowNull:false
    },
    d_country :{
    type:Sequelize.ENUM('Bangladesh','india'),
    allowNull:false,
    default :'Bangladesh'

    },
    d_dateofbirth :{
    type:Sequelize.DATE,
    allowNull:false

    },
     createdAt:{
    type:Sequelize.DATE,
    allowNull:false
    },
    updatedAt:{
    type:Sequelize.DATE,
    allowNull:false}

    }

)
},

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');

    */

      return queryInterface.dropTable('doctors');

  }
};
