import express from "express";
import categoriasRoutes from "./routes/categorias.routes.js"
import regionesRoutes from "./routes/regiones.routes.js"
import correosRoutes from "./routes/correos.routes.js";
import empleadosRoutes from "./routes/empleados.routes.js";
import proveedoresRoutes from "./routes/proveedores.routes.js"
import cors from "cors";

const app = express();

app.set("port", 5000);


const configCors = {
    method:["GET", "POST", "PUT", "DELETE"]
};

app.use(express.json());

app.use(cors(configCors));

app.use("/api/categorias", categoriasRoutes);
app.use("/api/regiones", regionesRoutes);
app.use("/api/correos", correosRoutes);
app.use("/api/empleados", empleadosRoutes);
app.use("/api/proveedores", proveedoresRoutes);


export default app;