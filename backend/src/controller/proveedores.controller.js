import getConnection from "../db/database.js";

const getProveedores = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT ProveedorID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax, Pagina FROM proveedores");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

const addProveedores = async(req, res) =>{
    try {
        const {Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax, Pagina} = req.body;
        const proveedores = {Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax, Pagina};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO proveedores SET ?", proveedores);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

const deleteProveedores = async (req, res) => {
    try {
      const {id} = req.params;
      const connection = await getConnection();
      const result = await connection.query("DELETE FROM proveedores WHERE ProveedorID =?", id);
      console.log(result);
      res.json(result);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

const getProveedor = async (req, res) => {
    try {
      const {id} = req.params;
      const connection = await getConnection();
      const result = await connection.query("SELECT ProveedorID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax, Pagina FROM proveedores WHERE ProveedorID=?", id);
      console.log(result);
      res.json(result);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    };
};

const updateProveedor = async (req, res) => {
    try {
      const {id} = req.params;
      const {Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax, Pagina} = req.body;
      const proveedor = {Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax, Pagina};
      const connection = await getConnection();
      const result = await connection.query("UPDATE proveedores SET ? WHERE ProveedorID=?", [proveedor, id]);
      console.log(result);
      res.json(result);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    };
};

export const methodHTTP = {
    getProveedores,addProveedores,deleteProveedores,getProveedor,updateProveedor
}