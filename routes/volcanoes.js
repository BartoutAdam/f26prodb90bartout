const express = require('express');
const router = express.Router();
const volcano = require('../controllers/volcano');

router.get('/', volcano.volcano_view_all_Page);

router.get('/detail', volcano.volcano_view_one_Page);
module.exports = router;