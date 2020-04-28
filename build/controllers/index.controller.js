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
        });
    }
    //READ
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.render('index');
        });
    }
    //READ
    libros(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.render('libros');
        });
    }
    //READ
    libro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, pagina } = req.params;
            let raw = fs_1.default.readFileSync('libros.json');
            let json = JSON.parse(raw);
            let libros = json.libros;
            for (let i = 0; i < libros.length; i++) {
                let libro = libros[i];
                if (libro['id'] == id) {
                    let contenido = fs_1.default.readFileSync(`views/libros/${libro.slug}/${libro.slug.split('-').join('_')}_${pagina}.html`, 'utf8');
                    res.render(`libros/${libro.slug}/index`, { pagina: contenido });
                    break;
                }
            }
        });
    }
    //READ
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.render('crear');
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
            let end = false;
            for (let i = 0; i < notas.length; i++) {
                // console.log(notas[i].id,i,index)
                if (notas[i]['id'] == index) {
                    notas.splice(i, 1);
                    let write = JSON.stringify(json);
                    fs_1.default.writeFileSync('notes.json', write);
                    res.json({ success: true });
                    break;
                }
            }
        });
    }
}
const indexController = new IndexController();
exports.default = indexController;
