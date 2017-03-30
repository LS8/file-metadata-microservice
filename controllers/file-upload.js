const fileSize = require('../helpers/file-size');
module.exports = function(req, res) {
  const info = fileSize(req, res);
  res.render('size', {
    message: `The file "${info.name}" consists of ${info.size} bytes`
  })
  // res.send(info);
};
