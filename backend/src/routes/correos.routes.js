import { Router } from "express";
import { methodHTTP as correosController } from "../controller/correos.controller.js";

const router = Router();

router.get("/", correosController.getCorreos);
router.post("/add", correosController.addCorreos);
router.delete("/del/:id", correosController.deleteCorreos);
router.get("/:id", correosController.getCorreo);
router.put("/upd/:id", correosController.updateCorreos);

export default router;