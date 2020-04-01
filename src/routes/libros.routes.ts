import {Router} from 'express';
import librosController from '../controllers/libros.controller';

class LibrosRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.post('/', librosController.create)
        this.router.get('/', librosController.read)
        this.router.get('/:libro', librosController.read)
        this.router.put('/', librosController.update)
        this.router.delete('/:index', librosController.delete)
    }
}
const librosRoutes = new LibrosRoutes();
export default librosRoutes.router;