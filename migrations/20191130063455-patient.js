'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return queryInterface.createTable('customers',{
    pid :{
    primaryKey:true,
    autoIncrement:true,
    type:Sequelize.INTEGER,
    allowNull:false,
    },
    pname:{
    type:Sequelize.STRING,
    allowNull:false
    },
    phonenum:{
    type:Sequelize.INTEGER,
    allowNull:false
    },
    country :{
    type:Sequelize.ENUM('Bangladesh','india'),
    allowNull:false,
    default :'Bangladesh'

    },
    dateofbirth :{
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

     return queryInterface.dropTable('customers');


  }
};
