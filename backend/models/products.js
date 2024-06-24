import mongoose, { SchemaTypes } from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    NameProduct: {
      type: SchemaTypes.String,
      required: true,
      trim: true,
    },
    TypeProduct: {
      type: SchemaTypes.String,
      required: true,
      trim: true,
    },
    Brand: {
      type: SchemaTypes.String,
      required: true,
      trim: true,
    },
    Description: {
      type: SchemaTypes.String,
      required: true,
      trim: true,
    },
    characteristics: {
      type: SchemaTypes.String,
      trim: true,
    },
    Price: {
      type: SchemaTypes.String,
      required: true,
      trim: true,
    },
    Material: {
      type: SchemaTypes.String,
      trim: true,
    },
    FingerprintSensor: {
      type: SchemaTypes.Boolean,
      default: false,
    },
    Memory: {
      type: SchemaTypes.String,
      trim: true,
    },
    Camera: {
      type: SchemaTypes.String,
      trim: true,
    },
    Battery: {
      type: SchemaTypes.String,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
