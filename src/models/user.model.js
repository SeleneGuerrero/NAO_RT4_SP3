import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  review_id: { type: Number, required: true, unique: true },
  restaurant_name: { type: String, required: true },
  user_name: { type: String, required: true },
  rating: { type: Number, required: true },
  review_text: { type: String, required: true },
  date: { type: String, required: true },
  city: { type: String, required: true },
  cuisine: { type: String, required: true },
});

const Review = mongoose.model("reviews", reviewSchema);


export default Review;
