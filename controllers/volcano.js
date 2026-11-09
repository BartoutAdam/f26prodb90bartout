const Volcano = require('../models/volcano');

exports.volcano_list = async function(req, res) {
  try {
    const volcanoes = await Volcano.find();
    res.json(volcanoes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.volcano_detail = function(req, res) {
  res.send('NOT IMPLEMENTED: Volcano detail ' + req.params.id);
};

exports.volcano_create_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Volcano create POST');
};

exports.volcano_delete = function(req, res) {
  res.send('NOT IMPLEMENTED: Volcano delete DELETE ' + req.params.id);
};

exports.volcano_update_put = function(req, res) {
  res.send('NOT IMPLEMENTED: Volcano update PUT ' + req.params.id);
};
