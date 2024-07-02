import { Router } from "express";
import {
    CreateProduct,
    DeleteProduct,
    GetProduct,
    GetProducts,
    UpdateProduct,
  } from "../controllers/products.controllers.js";
import { PRODUCTS_ROUTE } from "./router.map.js";
import { authRequired } from "../middleware/validateToken.js";

const router = Router();

router.get(PRODUCTS_ROUTE,authRequired, GetProducts);

router.post(PRODUCTS_ROUTE, CreateProduct);

router.put(PRODUCTS_ROUTE + "/:id", UpdateProduct);

router.delete(PRODUCTS_ROUTE + "/:id", DeleteProduct);

router.get(PRODUCTS_ROUTE + "/:id", GetProduct);

export default router;