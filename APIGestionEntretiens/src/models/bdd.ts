import 'dotenv/config';
import mariadb from 'mariadb';

// Configuration du pool de connexions MariaDB
const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'api_gestion_entretiens',
  connectionLimit: 5,
});

// Test de connexion au pool
pool.getConnection()
    .then(conn => {
      console.log("Connexion réussie à la base de données.");
      conn.release(); // Libérer la connexion de retour au pool
    })
    .catch(err => {
      console.error("Impossible de se connecter à la base de données:", err);
    });

export { pool };

