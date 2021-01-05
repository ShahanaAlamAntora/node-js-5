'use strict'
module.exports = function (sequelize,DataTypes)
{
var doctors=sequelize.define('doctors',{
 d_id :{
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER,
    allowNull:false,
    },
    d_name:{
    type:DataTypes.STRING,
    allowNull:false
    },
    d_phonenum:{
    type:DataTypes.INTEGER,
    allowNull:false
    },
    d_country :{
    type:DataTypes.ENUM('Bangladesh','india'),
    allowNull:false,
    default :'Bangladesh'

    },
    d_dateofbirth :{
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
return doctors;
}