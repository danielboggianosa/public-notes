"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const monitoreo_controller_1 = __importDefault(require("../controllers/monitoreo.controller"));
class MonitoreoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', monitoreo_controller_1.default.read);
        this.router.get('/crear', monitoreo_controller_1.default.crear);
        this.router.get('/libros', monitoreo_controller_1.default.libros);
        this.router.get('/libros/:id/:pagina', monitoreo_controller_1.default.libro);
    }
}
const monitoreoRoutes = new MonitoreoRoutes();
exports.default = monitoreoRoutes.router;
