const express = require('express');
const router = express.Router();

const solarsystemController = require('../app/controllers/SolarSystemController');

router.post('/store', solarsystemController.store);
router.get('/create', solarsystemController.create);
router.get('/:id/edit', solarsystemController.edit);
router.put('/:id', solarsystemController.update);
router.delete('/:id', solarsystemController.destroy);
router.get('/:slug', solarsystemController.show);
router.get('/', solarsystemController.index);

module.exports = router;
