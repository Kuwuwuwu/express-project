import { Router } from "express";
import { getTheme, setTheme } from "../controllers/themeController.js";

const router = Router();

// підстановка теми у locals перед рендером всіх маршрутів
router.use(getTheme);

router.post("/theme", setTheme);

export default router;

