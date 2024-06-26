import pool from "../config/mysql.db";
import { success, error } from "../messages/browser";
import { config } from "dotenv";
config();


// ------------------------------METODO DE MOSTRAR UNA SOLA FACTURA------------------------------------------------
const mostrarFactura = async (req, res)  => {
    const id = req.params['id'];
    try {
        const [respuesta] = await pool.query(`CALL SP_MOSTRAR_FACTURA("${id}");`);
        success(req, res, 200, respuesta[0]);
    } catch (err) {
        error(req, res, 500, err);
    }
};


// ------------------------------METODO DE MOSTRAR TODAS LAS FACTURA------------------------------------------------
const listarFactura = async (req, res)  => {
    try {
        const [respuesta] = await pool.query(`CALL SP_LISTAR_FACTURA();`);
        success(req, res, 200, respuesta[0]);
    } catch (err) {
        error(req, res, 500, err);
    }
};


// ------------------------------METODO DE CREAR FACTURA----------------------------------------------------------
const crearFactura = async (req, res) => {
    const {idUsuario, idProducto, idMetodoPago, cantidad, fecha} = req.body;
    try {
        const respuesta = await pool.query(`CALL SP_CREAR_FACTURA("${idUsuario}", "${idProducto}", "${idMetodoPago}", "${cantidad}", "${fecha}");`);
        if (respuesta[0].affectedRows >= 1) {
            success(req, res, 201, "Factura Creada.");
        } else {
            error(req, res, 401, "No se creo la factura, Intentalo mas tarde.");
        }
    } catch (err) {
        error(req, res, 400, err);
    }
};


// ------------------------------METODO DE ELIMINAR FACTURA-----------------------------------------------------------
const eliminarFactura = async (req, res) => {
    const {idFactura} = req.body;
    try {
        const respuesta = await pool.query(`CALL SP_ELIMINAR_FACTURA("${idFactura}");`);
        if (respuesta[0].affectedRows == 1) {
            success(req, res, 201, "Factura eliminada.");
        } else {
            error(req, res, 400, "No se elimino la factura, Intentalo mas tarde.");
        }
    } catch (err) {
        error(req, res, 400, err);
    }
};

export { listarFactura, mostrarFactura, crearFactura, eliminarFactura };