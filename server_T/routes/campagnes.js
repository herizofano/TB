import express from "express";
import { getSales } from "../controllers/campagnes.js"

const router = express.Router();

router.get("/sales", getSales)

export default router;