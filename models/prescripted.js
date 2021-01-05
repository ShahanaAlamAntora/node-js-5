'use strict'
module.exports = function (sequelize,DataTypes)
{
var  prescripted =sequelize.define('prescripted',{
 prescripted_id :{
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER,
    allowNull:false,
    },

    description:{
    type:DataTypes.STRING,
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
return prescripted;
}