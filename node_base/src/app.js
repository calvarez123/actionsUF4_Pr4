const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./config/db');
const userRoutes = require('./api/routes/userRoutes');
const eventRoutes = require('./api/routes/eventRoutes'); // Importa las rutas de eventos
const app = express();

app.use(express.json());
app.set('json spaces', 2);

mongoose.connect(dbConfig.MONGODB_URI).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));

app.get('/api/health', (req, res) => {
  res.json({ status: "OK" });
});

app.use('/api', userRoutes);
app.use('/api', eventRoutes);

module.exports = app;
