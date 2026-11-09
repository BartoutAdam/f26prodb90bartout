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

exports.volcano_create_post = async function(req, res) {
  try {
    const { volcano_name, country, elevation } = req.body;
    const volcano = await Volcano.create({ volcano_name, country, elevation });
    res.status(201).json(volcano);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.volcano_delete = function(req, res) {
  res.send('NOT IMPLEMENTED: Volcano delete DELETE ' + req.params.id);
};

exports.volcano_update_put = function(req, res) {
  res.send('NOT IMPLEMENTED: Volcano update PUT ' + req.params.id);
};

exports.volcano_view_all_Page = async function(req, res, next) {
  try {
    const results = await Volcano.find();
    res.render('volcanoes', { title: 'Search Results Volcanoes', results });
  } catch (error) {
    next(error);
  }
};