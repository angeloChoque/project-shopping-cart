import mongoose, { SchemaTypes } from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: SchemaTypes.String,
      required: true,
      trim: true,
    },
    email: {
      type: SchemaTypes.String,
      required: true,
      trim: true,
    },
    password: {
      type: SchemaTypes.String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
