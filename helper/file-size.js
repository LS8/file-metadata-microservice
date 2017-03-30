module.exports = (req, res) => {
  if (!req.files || !req.files[0]) {
    return "Error: No File found";
  }
  return {
    name: req.files[0].originalname || 'No file name' ,
    size: req.files[0].size || 0
  };
}
