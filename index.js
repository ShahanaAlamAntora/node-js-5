const express = require('express')
const app = express()

var DB= require("./models/index");
var sequelize=DB.sequelize;

var customermodel=sequelize.models.customers;

var doctormodel=sequelize.models.doctors;

var prescriptionmodel=sequelize.models.prescriptions;

var examinationmodel=sequelize.models.examinations;

var clinicaldetectionmodel=sequelize.models.clinicaldetections;

var medicationmodel=sequelize.models.medcations;

var prescriptedmodel=sequelize.models.prescripted;

var nursemodel=sequelize.models.nurses;

var receptionistmodel=sequelize.models.receptionists;

var roommodel=sequelize.models.rooms;


app.get("/",function(req,res)
{
 customermodel.findAll().then( function(customers)
 {
res.send(customers);
 }).catch(function(err)
 {
 res.send(err)})
})

app.get("/doctors",function(req,res)
{
 doctormodel.findAll().then( function(doctors)
 {
res.send(doctors);
 }).catch(function(err)
 {
 res.send(err)})
})

app.get("/prescriptions",function(req,res)
{
 prescriptionmodel.findAll().then( function(prescriptions)
 {
res.send(doctors);
 }).catch(function(err)
 {
 res.send(err)})
})

app.get("/examinations",function(req,res)
{
 examinationmodel.findAll().then( function(examinations)
 {
res.send(examinations);
 }).catch(function(err)
 {
 res.send(err)})
})

app.get("/clinicaldetections",function(req,res)
{
 clinicaldetectionmodel.findAll().then( function(clinicaldetections)
 {
res.send(clinicaldetections);
 }).catch(function(err)
 {
 res.send(err)})
})

app.get("/medications",function(req,res)
{
 medicationmodel.findAll().then( function(medications)
 {
res.send(doctors);
 }).catch(function(err)
 {
 res.send(err)})
})

app.get("/prescripted",function(req,res)
{
 prescriptedmodel.findAll().then( function(prescripted)
 {
res.send(prescripted);
 }).catch(function(err)
 {
 res.send(err)})
})

app.get("/nurses",function(req,res)
{
 nursemodel.findAll().then( function(nurses)
 {
res.send(nurses);
 }).catch(function(err)
 {
 res.send(err)})
})

app.get("/receptionists",function(req,res)
{
 receptionistmodel.findAll().then( function(receptionists)
 {
res.send(receptionists);
 }).catch(function(err)
 {
 res.send(err)})
})

app.get("/rooms",function(req,res)
{
 roommodel.findAll().then( function(rooms)
 {
res.send(rooms);
 }).catch(function(err)
 {
 res.send(err)})
})

app.listen(3000);
