const Problema = require('../models/probleme');
const mongoose = require('mongoose');


// creaza o problema

const createProblema = async (req, res) =>{
    const {numeProblema, cerinta, explicatie, restrictii, dateDeIntrare, dateDeIesire, dificultate, 
    operatii, numeFisierOutput, numeFisierInput, exempleInput, exempleOutput} = req.body;
    console.log(numeProblema, cerinta, explicatie, restrictii, dateDeIntrare, dateDeIesire, dificultate, 
        operatii, numeFisierOutput, numeFisierInput, exempleInput, exempleOutput)

    try{
        const problema = await Problema.create({numeProblema, cerinta, explicatie, restrictii, 
        dateDeIntrare, dateDeIesire, dificultate, 
        operatii, numeFisierOutput, numeFisierInput, exempleInput, exempleOutput})
        res.status(200).json(problema);
    }catch (error){
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    createProblema
}