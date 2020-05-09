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
const https_1 = __importDefault(require("https"));
const http_1 = __importDefault(require("http"));
class MonitoreoController {
    //CREATE
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    //READ
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { url, protocol } = req.body;
            let result = [];
            let run = (protocol == "https") ? https_1.default : http_1.default;
            let start = Date.now();
            run.get(url, (resp) => {
                res.json({
                    url: url,
                    success: true,
                    status: resp.statusCode,
                    header: resp.headers,
                    time: Date.now() - start
                });
            }).on('error', (e) => {
                console.log(e);
                res.json({
                    url: url,
                    success: false,
                    status: e.code,
                    error: e,
                    time: Date.now() - start
                });
            });
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
        });
    }
}
const monitoreoController = new MonitoreoController();
exports.default = monitoreoController;
