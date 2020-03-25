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
        this.router.post('/crear', index_controller_1.default.create);
        this.router.get('/', index_controller_1.default.read);
        this.router.get('/crear', index_controller_1.default.crearForm);
        this.router.put('/', index_controller_1.default.update);
        this.router.delete('/', index_controller_1.default.delte);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
