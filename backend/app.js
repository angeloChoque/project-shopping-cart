import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import ProductRoutes from "./routers/products.routes.js";
import authRoutes from "./routers/users.routes.js";

const app = express();

const corsOptions = {
  origin: "http://localhost:5174",
  credentials: true,
};

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", authRoutes);
app.use("/api", ProductRoutes);

export default app;
