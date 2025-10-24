import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import reviewRoutes from "./src/routes/user.routes.js";
import ownerRoutes from "./src/routes/owner.routes.js";;

dotenv.config();

const app = express();
app.use(express.json());

// Conexión a MongoDB
connectDB();

// Rutas principales
app.use("/api/reviews", reviewRoutes);

app.use("/api/owners", ownerRoutes);


// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
