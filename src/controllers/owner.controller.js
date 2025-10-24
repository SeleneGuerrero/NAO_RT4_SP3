import fs from "fs";
import csv from "csv-parser";
import Owner from "../models/owner.model.js";
import Review from "../models/user.model.js";

// 🟢 Crear un nuevo dueño/restaurante
export const createOwner = async (req, res) => {
  try {
    const { owner_id, name, restaurant_name, email, phone, city, cuisine } = req.body;
    const newOwner = new Owner({ owner_id, name, restaurant_name, email, phone, city, cuisine });
    await newOwner.save();
    res.status(201).json({ message: "Owner registered successfully", owner: newOwner });
  } catch (error) {
    res.status(500).json({ message: "Error creating owner", error: error.message });
  }
};

// 🟡 Actualizar información del restaurante
export const updateOwner = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const owner = await Owner.findOneAndUpdate({ owner_id: id }, updates, { new: true });
    if (!owner) return res.status(404).json({ message: "Owner not found" });
    res.status(200).json({ message: "Owner updated", owner });
  } catch (error) {
    res.status(500).json({ message: "Error updating owner", error: error.message });
  }
};

// 🔵 Obtener todas las reseñas del restaurante
export const getRestaurantReviews = async (req, res) => {
  try {
    const { restaurant_name } = req.params;
    const reviews = await Review.find({ restaurant_name });
    if (reviews.length === 0)
      return res.status(404).json({ message: "No reviews found for this restaurant" });
    res.status(200).json({ restaurant_name, reviews });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving reviews", error: error.message });
  }
};

// 🟠 Eliminar un restaurante (propietario)
export const deleteOwner = async (req, res) => {
  try {
    const { id } = req.params;
    const owner = await Owner.findOneAndDelete({ owner_id: id });
    if (!owner) return res.status(404).json({ message: "Owner not found" });
    res.status(200).json({ message: "Owner deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting owner", error: error.message });
  }
};

// 🔹 Obtener promedio de calificación
export const getAverageRating = async (req, res) => {
  try {
    const { restaurant_name } = req.params;
    const reviews = await Review.find({ restaurant_name });
    if (reviews.length === 0)
      return res.status(404).json({ message: "No reviews found for this restaurant" });

    const avg =
      reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

    res.status(200).json({
      restaurant_name,
      average_rating: avg.toFixed(2),
      total_reviews: reviews.length,
    });
  } catch (error) {
    res.status(500).json({ message: "Error calculating average rating", error: error.message });
  }
};

// 🧩 Importar dueños desde CSV
export const importOwners = async (req, res) => {
  try {
    const results = [];
    fs.createReadStream("./src/owners.csv")
      .pipe(csv())
      .on("data", (data) =>
        results.push({
          owner_id: Number(data.owner_id),
          name: data.name,
          restaurant_name: data.restaurant_name,
          email: data.email,
          phone: data.phone,
          city: data.city,
          cuisine: data.cuisine,
        })
      )
      .on("end", async () => {
        await Owner.deleteMany({});
        await Owner.insertMany(results);
        res.json({
          message: "✅ Owners imported successfully",
          count: results.length,
        });
      });
  } catch (error) {
    res.status(500).json({ message: "Error importing owners", error: error.message });
  }
};
