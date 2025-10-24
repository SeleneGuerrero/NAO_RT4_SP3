import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema({
  owner_id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  restaurant_name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: String,
  city: String,
  cuisine: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Owner = mongoose.model("Owner", ownerSchema);
export default Owner;
