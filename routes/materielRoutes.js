const express = require('express');

const { getMateriel, addMateriel, deleteMateriel, putMateriel } = require('../controller/MaterielController');

const router = express.Router();

router.route('/').get(getMateriel).post(addMateriel);

router.route('/:id').put(putMateriel).delete(deleteMateriel);

module.exports = router;