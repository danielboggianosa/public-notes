"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notas_controller_1 = __importDefault(require("../controllers/notas.controller"));
class NotasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', notas_controller_1.default.create);
        this.router.get('/', notas_controller_1.default.read);
        this.router.get('/:buscar', notas_controller_1.default.read);
        this.router.put('/', notas_controller_1.default.update);
        this.router.delete('/:index', notas_controller_1.default.delete);
    }
}
const notasRoutes = new NotasRoutes();
exports.default = notasRoutes.router;
