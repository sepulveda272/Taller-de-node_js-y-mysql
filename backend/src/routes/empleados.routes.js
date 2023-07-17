import { Router } from "express";
import { methodHTTP as empleadoController } from "../controller/empleados.controller.js"

const router = Router();

router.get("/", empleadoController.getEmpleados);
router.post("/add", empleadoController.addEmpleados);
router.delete("/del/:id", empleadoController.deleteEmpleados);
router.get("/:id", empleadoController.getEmpleado);
router.put("/upd/:id", empleadoController.updateEmpleado);

export default router;