'use strict'
module.exports = function (sequelize,DataTypes)
{
var  clinicaldetections =sequelize.define('clinicaldetections',{
 detection_id :{
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER,
    allowNull:false,
    },

    patient_id:{
    type:DataTypes.INTEGER,
    allowNull:false
    },




    detection_date :{
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
return clinicaldetections;
}