const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProblemsSchema = new Schema({
  titlu: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  // cerinta: {
  //   type: String,
  //   required: true
  // },
  // descriere: {
  //   type: String,
  //   required: true
  // },
  // tip: {
  //   type: String,
  //   required: true
  // },
  // taguri: {
  //   type: Array,
  //   required: true
  // },
  // dificultate: {
  //   type: String,
  //   required: true
  // },
  // input: {
  //   type: String,
  //   required: true
  // },
  // output: {
  //   type: String,
  //   required: true
  // },
  // timpDeExecutie: {
  //   type: String,
  //   required: true
  //   },
  //   exemple: {
  //       type: Array,
  //       required: true
  //   },
  //   teste: {
  //       type: Array,
  //       required: true
  //   },
  //   limitaDeMemorie: {
  //       type: String,
  //       required: true
  //   },
  //   categorie:{
  //       type: String,
  //       required:true
  //   },
  //   subcategorie:{
  //       type: String, 
  //       required:true
  //   },
    
}, { timestamps: true })

module.exports = mongoose.model('Problems', ProblemsSchema)