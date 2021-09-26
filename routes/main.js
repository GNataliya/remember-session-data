const express = require('express');
const axios = require('axios');
const multer = require('multer');
const upload = multer();
const router = express.Router();
const mongoose = require('mongoose');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('main');
});

router.get('/session', (req, res) => {
  console.log('session', req.session)
  res.json({status: 'ok', data: req.session.data })
});

router.post('/form', upload.none(), async (req, res) => {
  req.session.data = req.body;
  res.json({ status: 'ok' })
});

module.exports = router;
