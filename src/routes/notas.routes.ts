import {Router} from 'express';
import notasController from '../controllers/notas.controller';

class NotasRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.post('/', notasController.create)
        this.router.get('/', notasController.read)
        this.router.get('/:buscar', notasController.read)
        this.router.put('/', notasController.update)
        this.router.delete('/:index', notasController.delete)
    }
}
const notasRoutes = new NotasRoutes();
export default notasRoutes.router;