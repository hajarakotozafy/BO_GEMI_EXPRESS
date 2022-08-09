const jwt = require('jsonwebtoken');

require('dotenv').config();

const user = { id: 45, pseudo: 'gemi_test', email: 'gemi@test.com', 'password': 123456, admin: true };

const login = (req, res) => {
    if (req.body.username !== user.pseudo) {
        res.status(400).send("invalid username");
        return;
    }

    if (req.body.password !== user.password) {
        res.status(400).send("invalid password");
        return;
    }

    res.send({ 'authentication': true });
}

module.exports = {
    login
}