"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const libros_controller_1 = __importDefault(require("../controllers/libros.controller"));
class LibrosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', libros_controller_1.default.create);
        this.router.get('/', libros_controller_1.default.read);
        this.router.get('/:libro', libros_controller_1.default.read);
        this.router.put('/', libros_controller_1.default.update);
        this.router.delete('/:index', libros_controller_1.default.delete);
    }
}
const librosRoutes = new LibrosRoutes();
exports.default = librosRoutes.router;
