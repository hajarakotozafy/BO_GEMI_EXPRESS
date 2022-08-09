// const connection = require('./connection');

// @desc    Get Materials
// @route   GET /api/materiel
// @access  Private
const getMateriel = (req, res) => {
    res.status(200).send({ 'get material': true });
};

// @desc    Set Material
// @route   POST /api/matteriel
// @access  Private
const addMateriel = (req, res) => {
    res.status(201).send({ 'add Material': true });
}

// @desc    DELETE Materiel
// @route   DELETE /api/materiel/:id
// @access  Private
const deleteMateriel = (req, res) => {
    res.status(200).send({ 'delete Material': true });

}

// @desc    Put Materiel
// @route   PUT /api/materiel/:id
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