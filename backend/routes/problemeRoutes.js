const express = require('express');
const {
    createProblema,
} = require('../controllers/problemeController');
const router = express.Router();


router.post('/create', createProblema);

module.exports = router; 