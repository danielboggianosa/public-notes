"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
// import notes from ('./data/notes.json');
class Server {
    constructor() {
        this.router = express_2.Router();
        this.notas = [
            {
                nota: "HOla Mundo",
                createdAd: "2020-03-25T13:00:00.000Z",
                expires: "24h"
            }
        ];
        this.app = express_1.default();
        this.config();
        this.routes();
        // this.db_config()
    }
    config() {
        this.app.set('port', 4500);
        this.app.set('view engine', 'pug');
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', index_routes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => console.log('Servidor en el puerto', this.app.get('port')));
    }
}
const server = new Server();
server.start();
