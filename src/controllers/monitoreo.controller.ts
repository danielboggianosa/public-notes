import {Request, Response} from 'express';
import fs from 'fs'

class MonitoreoController{
    

    //CREATE
    public async create(req:Request, res:Response): Promise<void>{
    }
    
    //READ
    public async read(req:Request, res:Response): Promise<void>{
        res.render('monitoreo')
    }
    
        
    //UPDATE
    public async update(req:Request, res:Response): Promise<void>{
        res.json({message: 'Accediendo al método ACTUALIZAR'});
    }
    
    //DELTE
    public async delete(req:Request, res:Response): Promise<void>{
        
    }


}
const monitoreoController = new MonitoreoController();
export default monitoreoController;