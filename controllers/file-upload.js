const fileSize = require('../helpers/file-size');
module.exports = function(req, res) {
  const info = fileSize(req, res);
  if (typeof info === "Object") {
    res.render('size', {
      message: `The file "${info.name}" consists of ${info.size} bytes`
    });
  } else {
    res.render('size', {
      message: `${info}`
    });
  }
  // res.send(info);
};
