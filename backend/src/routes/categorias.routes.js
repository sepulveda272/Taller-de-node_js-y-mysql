import { Router } from "express";
import { methodHTTP as categoriaController } from "../controller/categoria.controller.js";

const router = Router();

router.get("/", categoriaController.getCategorias);
router.post("/add", categoriaController.addCategorias);
router.delete("/del/:id", categoriaController.deleteCategoria);
router.get("/:id", categoriaController.getCategoria);
router.put("/upd/:id", categoriaController.updateCategoria);

export default router;