"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = __importDefault(require("../controllers/index.controller"));
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', index_controller_1.default.read);
        this.router.get('/crear', index_controller_1.default.crear);
        this.router.get('/libros', index_controller_1.default.libros);
        this.router.get('/libros/:id/:pagina', index_controller_1.default.libro);
        this.router.get('/monitoreo', index_controller_1.default.monitoreo);
        this.router.get('/videos', index_controller_1.default.videos);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
