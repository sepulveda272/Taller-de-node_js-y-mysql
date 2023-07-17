import { Router } from "express";
import { methodHTTP as regionController } from "../controller/regiones.controller.js";

const router = Router();

router.get("/", regionController.getRegiones);
router.post("/add", regionController.addRegiones);
router.delete("/del/:id", regionController.deleteRegion);
router.get("/:id", regionController.getRegion);
router.put("/upd/:id", regionController.updateRegion);

export default router;