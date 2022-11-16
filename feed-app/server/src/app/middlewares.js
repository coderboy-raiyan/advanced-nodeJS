const router = require('express').Router();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

router.use([express.json(), morgan('dev'), cors({ origin: ['http://localhost:3000'] })]);

module.exports = router;
