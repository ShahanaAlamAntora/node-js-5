'use strict'
module.exports = function (sequelize,DataTypes)
{
var  receptionists =sequelize.define('receptionists',{
 r_id :{
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER,
    allowNull:false,
    },
    r_name:{
    type:DataTypes.STRING,
    allowNull:false
    },
    r_phonenum:{
    type:DataTypes.INTEGER,
    allowNull:false
    },

    r_dateofbirth :{
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
return receptionists;
}