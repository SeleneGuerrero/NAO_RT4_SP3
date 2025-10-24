import express from "express";
import {
  createOwner,
  updateOwner,
  getRestaurantReviews,
  deleteOwner,
  getAverageRating,
  importOwners,
} from "../controllers/owner.controller.js";

const router = express.Router();

// Importar dueños desde CSV
router.post("/import", importOwners);

// Crear nuevo dueño/restaurante
router.post("/", createOwner);

// Actualizar información del restaurante
router.put("/:id", updateOwner);

// Obtener todas las reseñas de su restaurante
router.get("/reviews/:restaurant_name", getRestaurantReviews);

// Obtener promedio de calificación
router.get("/rating/:restaurant_name", getAverageRating);

// Eliminar restaurante
router.delete("/:id", deleteOwner);

export default router;
