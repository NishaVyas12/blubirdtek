const express = require('express');
const contactdata = require('../controller/contactController');

const router = express.Router()

// send email 
router.post('/', contactdata)

module.exports = router;