import { Router } from 'express';
import { avionModel } from '../models/avionModel';

const router = Router();

// Handler pour obtenir tous les avions
router.get('/', async (req, res) => {
  try {
    const result = await avionModel.getAll();
    res.status(200).json(result);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
});

// Handler pour obtenir un avion par son immatriculation
router.get('/:immatriculation', async (req, res) => {
  try {
    const { immatriculation } = req.params;
    const avion = await avionModel.getByImmatriculation(immatriculation);
    if (avion) {
      res.status(200).json(avion);
    } else {
      res.status(404).json({ message: `AUCUN AVION TROUVE - AVEC L'IMMATRICULATION : ${immatriculation}` });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
});

// Handler pour ajouter un avion
router.post('/', async (req, res) => {
  try {
    const avion = await avionModel.addOne(req.body);
    res.status(201).json(avion);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An error occurred while adding the avion' });
    }
  }
});

// Handler pour mettre à jour un avion
router.put('/:immatriculation', async (req, res) => {
  try {
    const { immatriculation } = req.params;
    const updateResult = await avionModel.update(immatriculation, req.body);
    if (updateResult.affectedRows > 0) {
      const updatedAvion = await avionModel.getByImmatriculation(immatriculation);
      res.status(200).json(updatedAvion);
    } else {
      res.status(404).json({ message: "AUCUN AVION MODIFIE - Peut-être que l'immatriculation n'existe pas." });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred while updating the avion' });
    }
  }
});

// Handler pour supprimer un avion
router.delete('/:immatriculation', async (req, res) => {
  try {
    const { immatriculation } = req.params;
    const deleteResult = await avionModel.delete(immatriculation);
    if (deleteResult.affectedRows > 0) {
      res.status(200).json({ message: `Avion avec immatriculation ${immatriculation} supprimé.` });
    } else {
      res.status(404).json({ message: "AUCUN AVION SUPPRIME - L'avion correspondant à l’immatriculation spécifiée n’a pas été supprimé." });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred while deleting the avion' });
    }
  }
});

export { router as avionManager };
