'use strict'
module.exports = function (sequelize,DataTypes)
{
var prescriptions=sequelize.define('prescriptions',{
 prescriptions_id :{
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER,
    allowNull:false,
    },
    patient_id:{
    type:DataTypes.INTEGER,
    allowNull:false
    },
    doctor_id:{
    type:DataTypes.INTEGER,
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
return prescriptions;
}