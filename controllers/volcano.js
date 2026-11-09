const Volcano = require('../models/volcano');

exports.volcano_list = function(req, res) {
  res.send('NOT IMPLEMENTED: Volcano list');
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