import cors from "cors";
import express from "express";
import ProductRoutes from './routers/products.routes.js'
import authRoutes from './routers/users.routes.js'

const app = express();

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(ProductRoutes)
app.use("/api",authRoutes)


export default app;