'use strict'
module.exports = function (sequelize,DataTypes)
{
var rooms =sequelize.define('rooms',{
 rooms_id :{
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER,
    allowNull:false,
    },
    rooms_type:{
    type:DataTypes.STRING,
    allowNull:false
    },

    room_date :{
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
return rooms;
}