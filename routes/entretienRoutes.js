const express = require('express');

const { getEntretien, addEntretien, deleteEntretien, putEntretien } = require('../controller/EntretienController');

const router = express.Router();

router.route('/').get(getEntretien).post(addEntretien);

router.route('/:id').put(putEntretien).delete(deleteEntretien);

module.exports = router;