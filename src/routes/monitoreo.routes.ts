import {Router} from 'express';
import monitoreoController from '../controllers/monitoreo.controller';

class MonitoreoRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/', monitoreoController.read)
        this.router.get('/crear', monitoreoController.crear)
        this.router.get('/libros', monitoreoController.libros)
        this.router.get('/libros/:id/:pagina', monitoreoController.libro)
    }
}
const monitoreoRoutes = new MonitoreoRoutes();
export default monitoreoRoutes.router;