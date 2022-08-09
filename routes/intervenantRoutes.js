const express = require('express');

const { getIntervenant, addIntervenant, deleteIntervenant, putIntervenant } = require('../controller/IntervenantController');

const router = express.Router();

router.route('/').get(getIntervenant).post(addIntervenant);

router.route('/:id').put(putIntervenant).delete(deleteIntervenant);

module.exports = router;