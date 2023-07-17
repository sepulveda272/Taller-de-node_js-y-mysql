import getConnection from "../db/database.js";

const getCorreos = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT CorreoID , Compania, Telefono FROM correos");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

const addCorreos = async(req, res) =>{
    try {
        const {Compania, Telefono} = req.body;
        const correo = {Compania, Telefono};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO correos SET ?", correo);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

const deleteCorreos = async (req, res) => {
    try {
      const {id} = req.params;
      const connection = await getConnection();
      const result = await connection.query("DELETE FROM correos WHERE CorreoID =?", id);
      console.log(result);
      res.json(result);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

const getCorreo = async (req, res) => {
    try {
      const {id} = req.params;
      const connection = await getConnection();
      const result = await connection.query("SELECT CorreoID , Compania, Telefono FROM categorias WHERE CorreoID=?", id);
      console.log(result);
      res.json(result);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    };
};

const updateCorreos = async (req, res) => {
    try {
      const {id} = req.params;
      const {Compania, Telefono} = req.body;
      const correos = {Compania, Telefono};
      const connection = await getConnection();
      const result = await connection.query("UPDATE correos SET ? WHERE CorreoID =?", [correos, id]);
      console.log(result);
      res.json(result);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    };
};

export const methodHTTP = {
    getCorreos,
    addCorreos,
    deleteCorreos,
    getCorreo,
    updateCorreos
}