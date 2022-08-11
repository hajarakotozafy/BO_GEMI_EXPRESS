const connection = require('./connection');

// @desc    Get Entretiens
// @route   GET /api/entretien
// @access  Private
const getEntretien = (req, res) => {
    // res.status(200).send({ 'get entretien': true });
    connection.query('SELECT * FROM entretien', (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.status(200).send(rows);
        }
    })
};

// @desc    Set Entretien
// @route   POST /api/entretien
// @access  Private
const addEntretien = (req, res) => {
    // res.status(201).send({ 'add entretien': true });
    connection.query(`INSERT INTO entretien (num_intervenant, num_materiel, date_intervention, nb_heures) VALUES (?,?,?,?)`,
        [req.body.numIntervenant, req.body.numMateriel, req.body.dateIntervention, req.body.nbHeures],
        (err, result) => {
            if (err) {
                throw err;
            } else {
                res.status(201).send(result);
            }
        })
}

// @desc    DELETE Entretien
// @route   DELETE /api/entretien/:id
// @access  Private
const deleteEntretien = (req, res) => {
    // res.status(200).send({ 'delete entretien': true });
    connection.query(`DELETE FROM entretien WHERE num_entretien = ?`,
        [req.params.id],
        (err, result) => {
            if (err) {
                throw err;
            } else {
                res.status(200).send(result);
            }
        })
}

// @desc    Put Materiel
// @route   PUT /api/materiel/:id
// @access  Private
const putEntretien = (req, res) => {
    // res.status(200).send({ 'put entretien': true });
    connection.query(`UPDATE entretien SET num_intervenant = ?, num_materiel = ?, date_intervention = ?, nb_heures = ? WHERE num_entretien = ?`,
        [req.body.numIntervenant, req.body.numMateriel, req.body.dateIntervention, req.body.nbHeures, req.params.id],
        (err, result) => {
            if (err) {
                throw err;
            } else {
                res.status(200).send(result);
            }
        })
}


module.exports = {
    addEntretien,
    getEntretien,
    deleteEntretien,
    putEntretien
}