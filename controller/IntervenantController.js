const connection = require('./connection');

// @desc    Get Intervenants
// @route   GET /api/intervenant
// @access  Private
const getIntervenant = (req, res) => {
    // res.status(200).send({ 'get intervenant': true });
    connection.query('SELECT * FROM intervenant', (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.status(200).send(rows);
        }
    })
};

// @desc    Set Intervenant
// @route   POST /api/intervenant
// @access  Private
const addIntervenant = (req, res) => {
    // res.status(201).send({ 'add intervenant': true });
    connection.query(`INSERT INTO intervenant (nom_intervenant, TH_intervenant) VALUES (?,?)`,
        [req.body.nomIntervenant, req.body.THIntervenant],
        (err, result) => {
            if (err) {
                throw err;
            } else {
                res.status(201).send(result);
            }
        })
}

// @desc    DELETE Intervenant
// @route   DELETE /api/intervenant/:id
// @access  Private
const deleteIntervenant = (req, res) => {
    // res.status(200).send({ 'delete intervenant': true });
    connection.query(`DELETE FROM intervenant WHERE num_intervenant = ?`,
        [req.params.id],
        (err, result) => {
            res.status(200).send(result);
        })
}

// @desc    Put Intervenant
// @route   PUT /api/intervenant/:id
// @access  Private
const putIntervenant = (req, res) => {
    // res.status(200).send({ 'put intervenant': true });
    connection.query(`UPDATE intervenant SET nom_intervenant = ?, TH_intervenant = ? WHERE num_intervenant = ?`,
        [req.body.nomIntervenant, req.body.THIntervenant, req.params.id],
        (err, result) => {
            if (err) {
                throw err;
            } else {
                res.status(200).send(result);
            }
        })
}


module.exports = {
    getIntervenant,
    addIntervenant,
    deleteIntervenant,
    putIntervenant
}