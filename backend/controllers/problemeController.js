const Problema = require('../models/probleme');
const mongoose = require('mongoose');


// creaza o problema

const createProblema = async (req, res) =>{
    const {numeProblema, cerinta, explicatie, restrictii, dateDeIntrare, dateDeIesire, dificultate, 
    operatii, numeFisierOutput, numeFisierInput, exempleInput, exempleOutput} = req.body;
    console.log(numeProblema, cerinta, explicatie, restrictii, dateDeIntrare, dateDeIesire, dificultate, 
    operatii, numeFisierOutput, numeFisierInput, exempleInput, exempleOutput)
    
    let emptyFields = [];

    if(!dificultate){
        emptyFields.push('dificultate');
    }

    if(!operatii){
        emptyFields.push('operatii');
    }

    if(!exempleInput){
        emptyFields.push('exempleInput');
    }

    if(!exempleOutput){
        emptyFields.push('exempleOutput');
    }

    if(operatii === '3'){
        if(!numeFisierInput){
            emptyFields.push('numeFisierInput');
        }
        if(!numeFisierOutput){
            emptyFields.push('numeFisierOutput');
        }
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Toate campurile sunt obligatorii pentru a trece la urmatorul pas!', emptyFields })
    }

    try{
        const problema = await Problema.create({numeProblema, cerinta, explicatie, restrictii, 
        dateDeIntrare, dateDeIesire, dificultate, 
        operatii, numeFisierOutput, numeFisierInput, exempleInput, exempleOutput})
        res.status(200).json(problema);
    }catch (error){
        res.status(400).json({ error: error.message })
    }
}

// render la toate problemele

const getProbleme = async (req, res) =>{
    try{
        const probleme = await Problema.find({}).sort({createdAt: -1})
        res.status(200).json(probleme);
    }catch (error){
        res.status(400).json({ error: error.message })
    }

}


// render la o singura problema

const getProblema = async (req, res) =>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'Problema nu a fost gasita'})
    }

    const problema = await Problema.findById(id)

    if(!problema) {
      return res.status(400).json({error: 'Problema nu a fost gasita'})
    }
  
    res.status(200).json(problema)
}


// sterge o problema

const deleteProblema = async (req, res) =>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'Problema nu a fost gasita'})
    }

    const problema = await Problema.findOneAndDelete({_id: id})

    if(!problema) {
      return res.status(400).json({error: 'Problema nu a fost gasita'})
    }
  
    res.status(200).json(problema)
}


const updateProblema = async (req, res) =>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'Problema nu a fost gasita'})
    }

    const problema = await Problema.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!problema) {
        return res.status(400).json({error: 'Problema nu a fost gasita'})
    }

    res.status(200).json(problema)
}


module.exports = {
    createProblema,
    getProbleme,
    deleteProblema,
    getProblema,
    updateProblema
}


