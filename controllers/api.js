exports.api = function(req, res) {
  res.json([
    { resource: 'volcanoes', verbs: ['GET', 'POST', 'PUT', 'DELETE'] }
  ]);
};