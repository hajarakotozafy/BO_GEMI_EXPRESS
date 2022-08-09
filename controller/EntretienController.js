// const connection = require('./connection');

// @desc    Get Entretiens
// @route   GET /api/entretien
// @access  Private
const getEntretien = (req, res) => {
    res.status(200).send({ 'get entretien': true });
};

// @desc    Set Entretien
// @route   POST /api/entretien
// @access  Private
const addEntretien = (req, res) => {
    res.status(201).send({ 'add entretien': true });
}

// @desc    DELETE Entretien
// @route   DELETE /api/entretien/:id
// @access  Private
const deleteEntretien = (req, res) => {
    res.status(200).send({ 'delete entretien': true });

}

// @desc    Put Materiel
// @route   PUT /api/materiel/:id
// @access  Private
const putEntretien = (req, res) => {
    res.status(200).send({ 'put entretien': true });
}


module.exports = {
    addEntretien,
    getEntretien,
    deleteEntretien,
    putEntretien
}