const express = require('express');
const app = express();
const cors = require('cors');

const materialRoutes = require('./routes/materielRoutes');
const { login } = require('./middleware/auth');

app.use(cors());
app.use(express.json());

app.post('/api/login', (req, res) => {
    login(req, res);
});

app.use('/api/materiel', materialRoutes);


app.listen(3000, () => console.log(`Mihaino ao amin'ny port 3000 ny serveur...`))