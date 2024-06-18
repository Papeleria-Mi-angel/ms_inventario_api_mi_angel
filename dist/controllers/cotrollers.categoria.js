"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ordenAlfabetico = exports.mostrarCategoria = exports.modificarCategoria = exports.listarCategoria = exports.eliminarCategoria = exports.descripcion = exports.crearCategoria = exports.Viejo = exports.Nuevo = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mysql = _interopRequireDefault(require("../config/mysql.db"));
var _browser = require("../messages/browser.js");
var _dotenv = require("dotenv");
(0, _dotenv.config)();

// ------------------------------METODO DE MOSTRAR UNA SOLA CATEGORIA------------------------------------------------
var mostrarCategoria = exports.mostrarCategoria = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var id, _yield$pool$query, _yield$pool$query2, respuesta;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          id = req.params['id'];
          _context.prev = 1;
          _context.next = 4;
          return _mysql["default"].query("CALL SP_MOSTRAR_CATEGORIAS(\"".concat(id, "\");"));
        case 4:
          _yield$pool$query = _context.sent;
          _yield$pool$query2 = (0, _slicedToArray2["default"])(_yield$pool$query, 1);
          respuesta = _yield$pool$query2[0];
          (0, _browser.success)(req, res, 200, respuesta[0]);
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](1);
          (0, _browser.error)(req, res, 500, _context.t0);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 10]]);
  }));
  return function mostrarCategoria(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// ------------------------------METODO DE MOSTRAR TODAS LAS CATEGORIA----------------------------------------------
var listarCategoria = exports.listarCategoria = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _yield$pool$query3, _yield$pool$query4, respuesta;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _mysql["default"].query("CALL SP_LISTAR_CATEGORIAS();");
        case 3:
          _yield$pool$query3 = _context2.sent;
          _yield$pool$query4 = (0, _slicedToArray2["default"])(_yield$pool$query3, 1);
          respuesta = _yield$pool$query4[0];
          (0, _browser.success)(req, res, 200, respuesta[0]);
          _context2.next = 12;
          break;
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          (0, _browser.error)(req, res, 500, _context2.t0);
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return function listarCategoria(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// ------------------------------METODO DE MOSTRAR LA DESCRIPCON DE LA CATEGORIA Y PRODUCTO--------------------------
var descripcion = exports.descripcion = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _yield$pool$query5, _yield$pool$query6, respuesta;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _mysql["default"].query("CALL SP_MOSTRAR_CATE_PRODUC();");
        case 3:
          _yield$pool$query5 = _context3.sent;
          _yield$pool$query6 = (0, _slicedToArray2["default"])(_yield$pool$query5, 1);
          respuesta = _yield$pool$query6[0];
          (0, _browser.success)(req, res, 200, respuesta);
          _context3.next = 12;
          break;
        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          (0, _browser.error)(req, res, 500, _context3.t0);
        case 12:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 9]]);
  }));
  return function descripcion(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// ------------------------------METODO DE MOSTRAR CATEGORIA POR ORDEN ALFABETICO------------------------------------
var ordenAlfabetico = exports.ordenAlfabetico = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _yield$pool$query7, _yield$pool$query8, respuesta;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _mysql["default"].query("CALL SP_CATEGORIAS_ORDENALFABETICO();");
        case 3:
          _yield$pool$query7 = _context4.sent;
          _yield$pool$query8 = (0, _slicedToArray2["default"])(_yield$pool$query7, 1);
          respuesta = _yield$pool$query8[0];
          (0, _browser.success)(req, res, 200, respuesta[0]);
          _context4.next = 12;
          break;
        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          (0, _browser.error)(req, res, 500, _context4.t0);
        case 12:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 9]]);
  }));
  return function ordenAlfabetico(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

// ------------------------------METODO DE MOSTRAR CATEGORIA DE LA MAS NUEVA A LA MAS VIEJA--------------------------
var Nuevo = exports.Nuevo = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _yield$pool$query9, _yield$pool$query10, respuesta;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _mysql["default"].query("CALL SP_CATEGORIAS_MAS_NUEVO_VIEJO();");
        case 3:
          _yield$pool$query9 = _context5.sent;
          _yield$pool$query10 = (0, _slicedToArray2["default"])(_yield$pool$query9, 1);
          respuesta = _yield$pool$query10[0];
          (0, _browser.success)(req, res, 200, respuesta[0]);
          _context5.next = 12;
          break;
        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          (0, _browser.error)(req, res, 500, _context5.t0);
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 9]]);
  }));
  return function Nuevo(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

// ------------------------------METODO DE MOSTRAR CATEGORIA DE LA MAS VIEJA A LA MAS NUEVA--------------------------
var Viejo = exports.Viejo = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _yield$pool$query11, _yield$pool$query12, respuesta;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return _mysql["default"].query("CALL SP_CATEGORIAS_MAS_VIEJO_NUEVO();");
        case 3:
          _yield$pool$query11 = _context6.sent;
          _yield$pool$query12 = (0, _slicedToArray2["default"])(_yield$pool$query11, 1);
          respuesta = _yield$pool$query12[0];
          (0, _browser.success)(req, res, 200, respuesta[0]);
          _context6.next = 12;
          break;
        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](0);
          (0, _browser.error)(req, res, 500, _context6.t0);
        case 12:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 9]]);
  }));
  return function Viejo(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

// ------------------------------METODO DE CREAR LAS CATEGORIAS------------------------------------------------------
var crearCategoria = exports.crearCategoria = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var _req$body, Categoria, descripcion_categoria, fecha, respuesta;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _req$body = req.body, Categoria = _req$body.Categoria, descripcion_categoria = _req$body.descripcion_categoria, fecha = _req$body.fecha;
          _context7.prev = 1;
          _context7.next = 4;
          return _mysql["default"].query("CALL SP_INSERTAR_CATEGORIA(\"".concat(Categoria, "\", \"").concat(descripcion_categoria, "\", \"").concat(fecha, "\");"));
        case 4:
          respuesta = _context7.sent;
          if (respuesta[0].affectedRows == 1) {
            (0, _browser.success)(req, res, 201, "La Categoria ha sido Registrada.");
          } else {
            (0, _browser.error)(req, res, 400, "La Categoria NO se Registro Vuelve a Intentarlo.");
          }
          _context7.next = 11;
          break;
        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](1);
          (0, _browser.error)(req, res, 400, _context7.t0);
        case 11:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[1, 8]]);
  }));
  return function crearCategoria(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

// ------------------------------METODO DE MODIFICAR LAS CATEGORIAS--------------------------------------------------
var modificarCategoria = exports.modificarCategoria = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var _req$body2, idCategorias, Categoria, descripcion_categoria, fecha, respuesta;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _req$body2 = req.body, idCategorias = _req$body2.idCategorias, Categoria = _req$body2.Categoria, descripcion_categoria = _req$body2.descripcion_categoria, fecha = _req$body2.fecha;
          _context8.prev = 1;
          _context8.next = 4;
          return _mysql["default"].query("CALL SP_EDITAR_CATEGORIAS(\"".concat(idCategorias, "\", \"").concat(Categoria, "\", \"").concat(descripcion_categoria, "\", \"").concat(fecha, "\");"));
        case 4:
          respuesta = _context8.sent;
          if (respuesta[0].affectedRows == 1) {
            (0, _browser.success)(req, res, 201, "La Categoria ha sido Modificada.");
          } else {
            (0, _browser.error)(req, res, 400, "La Categoria NO se Modifico Vuelve a Intentarlo.");
          }
          _context8.next = 11;
          break;
        case 8:
          _context8.prev = 8;
          _context8.t0 = _context8["catch"](1);
          (0, _browser.error)(req, res, 400, _context8.t0);
        case 11:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[1, 8]]);
  }));
  return function modificarCategoria(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

// ------------------------------METODO DE ELIMINAR LAS CATEGORIAS---------------------------------------------------
var eliminarCategoria = exports.eliminarCategoria = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var idCategorias, respuesta;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          idCategorias = req.body.idCategorias;
          _context9.prev = 1;
          _context9.next = 4;
          return _mysql["default"].query("CALL SP_ELIMINAR_CATEGORIAS(\"".concat(idCategorias, "\");"));
        case 4:
          respuesta = _context9.sent;
          if (respuesta[0].affectedRows == 1) {
            (0, _browser.success)(req, res, 201, "La Categori ha sido Eliminada.");
          } else {
            (0, _browser.error)(req, res, 400, "La Categoria NO se ha Eliminado");
          }
          _context9.next = 11;
          break;
        case 8:
          _context9.prev = 8;
          _context9.t0 = _context9["catch"](1);
          (0, _browser.error)(req, res, 400, _context9.t0);
        case 11:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[1, 8]]);
  }));
  return function eliminarCategoria(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();