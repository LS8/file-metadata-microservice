module.exports = (req, res) => {
  return {
    name: req.files[0].originalname,
    size: req.files[0].size
  };
}
