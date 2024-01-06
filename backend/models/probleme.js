const mongoose = require('mongoose');


const ProblemsSchema = new mongoose.Schema({
  numeProblema: {
    type: String,
    required: true
  },
  cerinta: {
    type: String,
    required: true
  },
  explicatie:{
    type: String,
    required: false
  },
  restrictii:{
    type: String,
    required: false
  },
  dateDeIntrare: {
    type: String,
    required: true
  },
  dateDeIesire: {
    type: String,
    required: true
  },
  dificultate:{
    type: String,
    required: true
  },
  operatii: {
    type: String,
    required: true
  },
  numeFisierOutput:{
    type: String,
    required: false
  },
  numeFisierInput:{
    type: String,
    required: false
  },
  exempleInput: {
    type: String,
    required: true
  },
  exempleOutput: {
    type: String,
    required: true
  },

  // username: {
  //   type: String,
  //   required: true
  // },    
}, { timestamps: true })

module.exports = mongoose.model('Problema', ProblemsSchema)