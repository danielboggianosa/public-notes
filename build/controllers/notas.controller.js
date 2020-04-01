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
class NotasController {
    //CREATE
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, contenido } = req.body;
            let raw = fs_1.default.readFileSync('notes.json');
            let json = JSON.parse(raw);
            let notas = json.notas;
            json.lastId++;
            let newNote = {
                id: json.lastId,
                titulo: titulo,
                contenido: contenido,
                createdAt: new Date()
            };
            notas.push(newNote);
            let write = JSON.stringify(json, null, "\t");
            fs_1.default.writeFileSync('notes.json', write);
            res.json({ success: true, message: "Nota Creada" });
        });
    }
    //READ
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { buscar } = req.params;
            let raw = fs_1.default.readFileSync('notes.json');
            let json = JSON.parse(raw);
            let notas = json.notas;
            json.notas.forEach((n, notas) => {
                let creado = new Date(n.createdAt).getHours();
                let now = new Date().getHours();
                if ((now - creado) > 24)
                    json.notas.splice(notas, 1);
            });
            if (buscar)
                json.notas = notas.reverse().filter((n) => n.titulo.toLowerCase().includes(buscar.toLowerCase()) || n.contenido.toLowerCase().includes(buscar.toLowerCase()));
            res.json(json.notas);
        });
    }
    //UPDATE
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json({ message: 'Accediendo al método ACTUALIZAR' });
        });
    }
    //DELTE
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { index } = req.params;
            let raw = fs_1.default.readFileSync('notes.json');
            let json = JSON.parse(raw);
            let notas = json.notas;
            for (let i = 0; i < notas.length; i++) {
                // console.log(notas[i].id,i,notas)
                if (notas[i]['id'] == index) {
                    notas.splice(i, 1);
                    let write = JSON.stringify(json);
                    fs_1.default.writeFileSync('notes.json', write);
                    res.json({ success: true, notas: json.notas });
                    break;
                }
            }
        });
    }
}
const notasController = new NotasController();
exports.default = notasController;
