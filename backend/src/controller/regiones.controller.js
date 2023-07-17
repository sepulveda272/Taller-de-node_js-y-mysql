import getConnection from "../db/database.js";

const getRegiones = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT RegionesID, RegionesDescripcion FROM regiones");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

const addRegiones = async(req, res) =>{
    try {
        const {RegionesDescripcion} = req.body;
        const region = {RegionesDescripcion};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO regiones SET ?", region);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

const deleteRegion = async (req, res) => {
    try {
      const {id} = req.params;
      const connection = await getConnection();
      const result = await connection.query("DELETE FROM regiones WHERE RegionesID=?", id);
      console.log(result);
      res.json(result);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

const getRegion = async (req, res) => {
    try {
      const {id} = req.params;
      const connection = await getConnection();
      const result = await connection.query("SELECT RegionesID, RegionesDescripcion FROM regiones WHERE RegionesID=?", id);
      console.log(result);
      res.json(result);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    };
};

const updateRegion = async (req, res) => {
    try {
      const {id} = req.params;
      const {RegionesDescripcion} = req.body;
      const region = {RegionesDescripcion};
      const connection = await getConnection();
      const result = await connection.query("UPDATE regiones SET ? WHERE RegionesID=?", [region, id]);
      console.log(result);
      res.json(result);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    };
};

export const methodHTTP = {
    getRegiones,
    addRegiones,
    deleteRegion,
    getRegion,
    updateRegion
}