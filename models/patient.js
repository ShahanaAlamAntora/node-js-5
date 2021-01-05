'use strict'
module.exports = function (sequelize,DataTypes)
{
var customer=sequelize.define('customers',{
 pid :{
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER,
    allowNull:false,
    },
    pname:{
    type:DataTypes.STRING,
    allowNull:false
    },
    phonenum:{
    type:DataTypes.INTEGER,
    allowNull:false
    },
    country :{
    type:DataTypes.ENUM('Bangladesh','india'),
    allowNull:false,
    default :'Bangladesh'

    },
    dateofbirth :{
    type:DataTypes.DATE,
    allowNull:false

    },
      createdAt:{
    type:DataTypes.DATE,
    allowNull:false
    },
    updatedAt:{
    type:DataTypes.DATE,
    allowNull:false}






})
return customer;
}