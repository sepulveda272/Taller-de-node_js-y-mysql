import { Router } from "express";
import { methodHTTP as proveedorController } from "../controller/proveedores.controller.js"

const router = Router();

router.get("/", proveedorController.getProveedores);
router.post("/add", proveedorController.addProveedores);
router.delete("/del/:id", proveedorController.deleteProveedores);
router.get("/:id", proveedorController.getProveedor);
router.put("/upd/:id", proveedorController.updateProveedor);

export default router;