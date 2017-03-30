const express = require('express');
const router = express.Router();
const fileUpload = require('../controllers/file-upload.js')

router.post('/filesize', fileUpload);
router.get('*', (req, res) => {
  res.render('index');
});
module.exports = router;
