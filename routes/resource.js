const express = require('express');
const router = express.Router();
const api = require('../controllers/api');
const volcano = require('../controllers/volcano');

router.get('/', api.api);
router.get('/volcanoes', volcano.volcano_list);
router.get('/volcanoes/:id', volcano.volcano_detail);
router.post('/volcanoes', volcano.volcano_create_post);
router.put('/volcanoes/:id', volcano.volcano_update_put);
router.delete('/volcanoes/:id', volcano.volcano_delete);

module.exports = router;