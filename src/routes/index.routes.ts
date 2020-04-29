import {Router} from 'express';
import indexController from '../controllers/index.controller';

class IndexRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/', indexController.read)
        this.router.get('/crear', indexController.crear)
        this.router.get('/libros', indexController.libros)
        this.router.get('/libros/:id/:pagina', indexController.libro)
        this.router.get('/monitoreo', indexController.monitoreo)
    }
}
const indexRoutes = new IndexRoutes();
export default indexRoutes.router;