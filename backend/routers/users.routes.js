import { Router } from "express";
import { login , logout, profile, register} from '../controllers/auth.controllers.js'
import { authRequired } from "../middleware/validateToken.js";
import { validationSchema } from "../middleware/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post(`/register`, validationSchema(registerSchema) ,register)
router.post(`/login`,validationSchema(loginSchema),login)
router.post(`/logout`,logout)
router.get("/profile",authRequired,profile)


export default router