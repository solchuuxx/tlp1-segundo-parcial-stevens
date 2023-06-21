// Imports
require('dotenv').config();
const cors = require('cors');
const express = require('express');

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const port = process.env.PORT;
const path = require('path');
const app = express();


// Middlewares
app.use(express.json());
app.use(cors());
// TODO: Implementar middlewares

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

// Starting the server
app.listen(port, () => console.log(`Server on port ${port}`));