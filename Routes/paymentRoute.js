const express = require('express');
const router = express.Router()
const protect = require('../middleware/Authmiddleware');
const { pay } = require('../controllers/paymentController');

router.get("/", protect, pay);



module.exports = router