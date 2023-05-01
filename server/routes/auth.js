import { Router } from "express";
import { getMe, login, register } from "../controllers/auth.js";

const router = Router();

// Register
router.post('/register', register)

// Login
router.post('/login', login)

// Profile
router.post('/me', getMe)

export default router;