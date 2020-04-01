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
    }
}
const indexRoutes = new IndexRoutes();
export default indexRoutes.router;