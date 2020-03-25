"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class IndexController {
    //CREATE
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, contenido } = req.body;
            let raw = fs_1.default.readFileSync('notes.json');
            let notas = JSON.parse(raw);
            let newNote = {
                titulo: titulo,
                contenido: contenido,
                createdAt: new Date(),
                expires: "24h"
            };
            notas.notas.push(newNote);
            fs_1.default.writeFileSync('notes.json', notas);
            res.render('index', notas);
        });
    }
    //READ
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let raw = fs_1.default.readFileSync('notes.json');
            let notas = JSON.parse(raw);
            res.render('index', notas);
        });
    }
    //READ
    crearForm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let raw = fs_1.default.readFileSync('notes.json');
            let notas = JSON.parse(raw);
            res.render('crear', notas);
        });
    }
    //UPDATE
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json({ message: 'Accediendo al método ACTUALIZAR' });
        });
    }
    //DELTE
    delte(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json({ message: 'Accediendo al método BORRAR' });
        });
    }
}
const indexController = new IndexController();
exports.default = indexController;
