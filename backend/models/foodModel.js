import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    images: [{ type: String }], // Removed required: true
    cloudinary_ids: [{ type: String }], // Removed required: true
    category: { type: String, required: true },
    stock: { type: Number, required: true, default: 0 },
    discount: { type: Number, min: 0, max: 100 }, // Removed required and default
  },
  { timestamps: true }
);

const foodModel = mongoose.models.food || mongoose.model('food', foodSchema);
export default foodModel;
