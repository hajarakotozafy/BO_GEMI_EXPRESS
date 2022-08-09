const connection = require('./connection');

// @desc    Get Materials
// @route   GET /api/materiel
// @access  Private
const getMateriel = (req, res) => {
    // res.status(200).send({ 'get material': true });
    connection.query('SELECT * FROM materiel', (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.status(200).send(rows);
        }
    })
};

// @desc    Set Material
// @route   POST /api/matteriel
// @access  Private
const addMateriel = (req, res) => {
    // res.status(201).send({ 'add Material': true });
    connection.query(`INSERT INTO materiel (design, caracteristique, etat) VALUES (?,?,?)`,
        [req.body.design, req.body.caracteristique, req.body.etat],
        (err, result) => {
            if (err) {
                throw err;
            } else {
                res.status(201).send(result);
            }
        })
}

// @desc    DELETE Materiel
// @route   DELETE /api/materiel/:id
// @access  Private
const deleteMateriel = (req, res) => {
    // res.status(200).send({ 'delete Material': true });
    connection.query(`DELETE FROM materiel WHERE num_mat = ?`,
        [req.params.id],
        (err, result) => {
            res.status(200).send(result);
        })

}

// @desc    Put Materiel
// @route   PUT /api/materiel/:id
// @access  Private
const putMateriel = (req, res) => {
    // res.status(200).send({ 'put Material': true });
    connection.query(`UPDATE materiel SET design = ?, caracteristique = ?, etat = ? WHERE num_mat = ?`,
        [req.body.design, req.body.caracteristique, req.body.etat, req.params.id],
        (err, result) => {
            if (err) {
                throw err;
            } else {
                res.status(200).send(result);
            }
        })
}


module.exports = {
    getMateriel,
    addMateriel,
    deleteMateriel,
    putMateriel
}