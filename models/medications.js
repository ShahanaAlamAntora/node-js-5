'use strict'
module.exports = function (sequelize,DataTypes)
{
var  medications =sequelize.define('medications',{
 medications_id :{
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER,
    allowNull:false,
    },

    medications_name:{
    type:DataTypes.STRING,
    allowNull:false
    },




    date :{
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
return medications;
}