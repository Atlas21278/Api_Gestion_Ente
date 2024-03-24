import express from 'express';
import cors from 'cors';
import { avionManager } from './managers/avionManager'; // Assurez-vous que ce chemin est correct
import * as middlewares from './middlewares';

require('dotenv').config();

// Configuration CORS
const allowedOrigins = ['http://localhost:3000', 'http://127.0.0.1:3000'];
const options: cors.CorsOptions = { origin: allowedOrigins };

const app = express();

app.get('/', (req, res) => {
    res.send('Bienvenue sur mon API Express !');
});

// Activer CORS avec les options configurées
app.use(cors(options));

// Middleware pour analyser le JSON dans les requêtes entrantes
app.use(express.json());

// Utiliser avionManager pour toutes les routes préfixées par '/avions'
// avionManager s'occupera des routes spécifiques comme '/','/:immatriculation', etc.
app.use('/avions', avionManager);

// Middlewares pour les routes non trouvées et la gestion des erreurs
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
