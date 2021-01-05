'use strict'
module.exports = function (sequelize,DataTypes)
{
var  nurses =sequelize.define('nurses',{
 n_id :{
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER,
    allowNull:false,
    },
    n_name:{
    type:DataTypes.STRING,
    allowNull:false
    },
    n_phonenum:{
    type:DataTypes.INTEGER,
    allowNull:false
    },

    n_dateofbirth :{
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
return nurses;
}