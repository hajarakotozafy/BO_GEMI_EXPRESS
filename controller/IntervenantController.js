// const connection = require('./connection');

// @desc    Get Intervenants
// @route   GET /api/intervenant
// @access  Private
const getIntervenant = (req, res) => {
    res.status(200).send({ 'get intervenant ok': true });
};

// @desc    Set Intervenant
// @route   POST /api/intervenant
// @access  Private
const addIntervenant = (req, res) => {
    res.status(201).send({ 'add intervenant': true });
}

// @desc    DELETE Intervenant
// @route   DELETE /api/intervenant/:id
// @access  Private
const deleteIntervenant = (req, res) => {
    res.status(200).send({ 'delete intervenant': true });

}

// @desc    Put Intervenant
// @route   PUT /api/intervenant/:id
// @access  Private
const putIntervenant = (req, res) => {
    res.status(200).send({ 'put intervenant': true });
}


module.exports = {
    getIntervenant,
    addIntervenant,
    deleteIntervenant,
    putIntervenant
}