import {Router} from 'express';
import monitoreoController from '../controllers/monitoreo.controller';

class MonitoreoRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.post('/', monitoreoController.read)
    }
}
const monitoreoRoutes = new MonitoreoRoutes();
export default monitoreoRoutes.router;