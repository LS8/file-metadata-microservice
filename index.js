const express = require('express');
const multer  = require('multer');
const path = require('path');
const app = express();
const config = require('./config');
const fileUpload = require('./route/file-upload');

// multer middleware
app.use(multer({ dest: './uploads/' }).any());
// set up static
// app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/view'))

app.use('/', fileUpload);
app.use('*', (req, res) => res.redirect('/'));

app.listen(config.port);

