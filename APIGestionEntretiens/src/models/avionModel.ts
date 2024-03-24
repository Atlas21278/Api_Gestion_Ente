import { pool } from "./bdd";

export interface Avion {
  immatriculation: string;
  marque: string;
  modele: string;
  // Ajoutez d'autres propriétés selon le schéma de votre base de données
}

export const avionModel = {
  async getAll(): Promise<Avion[]> {
    const conn = await pool.getConnection();
    try {
      const query = 'SELECT * FROM avions'; // Adaptez à votre table
      const rows = await conn.query<Avion[]>(query);
      return rows;
    } finally {
      if (conn) conn.release();
    }
  },

  async getByImmatriculation(immatriculation: string): Promise<Avion | null> {
    const conn = await pool.getConnection();
    try {
      const query = 'SELECT * FROM avions WHERE immatriculation = ?';
      const rows = await conn.query<Avion[]>(query, [immatriculation]);
      return rows[0] || null;
    } finally {
      if (conn) conn.release();
    }
  },

  async addOne(avion: Avion): Promise<void> {
    const conn = await pool.getConnection();
    try {
      const query = 'INSERT INTO avions (immatriculation, marque, modele) VALUES (?, ?, ?)';
      await conn.query(query, [avion.immatriculation, avion.marque, avion.modele]);
    } finally {
      if (conn) conn.release();
    }
  },

  async update(immatriculation: string, avionData: Partial<Avion>): Promise<{ affectedRows: number }> {
    const conn = await pool.getConnection();
    try {
      const query = 'UPDATE avions SET marque = ?, modele = ? WHERE immatriculation = ?';
      const result = await conn.query(query, [avionData.marque, avionData.modele, immatriculation]);
      return { affectedRows: result.affectedRows };
    } finally {
      if (conn) conn.release();
    }
  },

  async delete(immatriculation: string): Promise<{ affectedRows: number }> {
    const conn = await pool.getConnection();
    try {
      const query = 'DELETE FROM avions WHERE immatriculation = ?';
      const result = await conn.query(query, [immatriculation]);
      return { affectedRows: result.affectedRows };
    } finally {
      if (conn) conn.release();
    }
  },
};
