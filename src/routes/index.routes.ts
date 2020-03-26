import {Router} from 'express';
import indexController from '../controllers/index.controller';

class IndexRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.post('/api/notas', indexController.create)
        this.router.get('/', indexController.read)
        this.router.get('/crear', indexController.crearForm)
        this.router.put('/', indexController.update)
        this.router.delete('/delete/:index', indexController.delete)
    }
}
const indexRoutes = new IndexRoutes();
export default indexRoutes.router;