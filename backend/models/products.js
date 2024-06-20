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
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
