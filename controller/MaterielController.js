// const connection = require('./connection');

// @desc    Get Avions
// @route   GET /api/avion
// @access  Private
const getMateriel = (req, res) => {
    res.status(200).send({ 'get material ok': true });
};

// @desc    Set Avion
// @route   POST /api/avion
// @access  Private
const addMateriel = (req, res) => {
    res.status(201).send({ 'add Material': true });
}

// @desc    DELETE Avion
// @route   DELETE /api/avion/:id
// @access  Private
const deleteMateriel = (req, res) => {
    res.status(200).send({ 'delete Material': true });

}

// @desc    Put Avion
// @route   PUT /api/avion/:id
// @access  Private
const putMateriel = (req, res) => {
    res.status(200).send({ 'put Material': true });
}


module.exports = {
    getMateriel,
    addMateriel,
    deleteMateriel,
    putMateriel
}