import express from 'express';
import {Application} from 'express-serve-static-core'
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/index.routes';
// import notes from ('./notes.json');

class Server {

    public app: Application;
    
    constructor(){
        this.app = express()
        this.config()
        this.routes()
        // this.db_config()
    }

    config(){
        this.app.set('port', 4500);
        this.app.set('view engine', 'pug');
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }

    routes():void{
        this.app.use('/', indexRoutes)
    }

    start():void{
        this.app.listen(this.app.get('port'), ()=>console.log('Servidor en el puerto', this.app.get('port')))
    }

}
const server = new Server();
server.start();
