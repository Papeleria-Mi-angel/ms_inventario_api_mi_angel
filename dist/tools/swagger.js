"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _swaggerAutogen = _interopRequireDefault(require("swagger-autogen"));
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var port = process.env.PORT || 3000;
var doc = {
  info: {
    title: 'API DE SEGURIDAD',
    description: 'API DE SEGURIDAD'
  },
  host: 'localhost:' + port + '/api'
};
var outputFile = './swagger-output.json';
var routes = ['../routes/categoria.router.js', '../routes/factura.router.js', '../routes/producto.router.js', '../routes/proveedor.roter.js', '../routes/usuarios.routers.js'];
(0, _swaggerAutogen["default"])()(outputFile, routes, doc);