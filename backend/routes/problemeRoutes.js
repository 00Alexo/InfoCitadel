const express = require('express');
const {
    createProblema,
    getProbleme,
    deleteProblema,
    getProblema,
    updateProblema
} = require('../controllers/problemeController');
const router = express.Router();


router.post('/create', createProblema);
router.get('/getAll', getProbleme);
router.get('/getOne/:id', getProblema);
router.delete('/delete/:id', deleteProblema);
router.patch('/update/:id', updateProblema);

module.exports = router; 