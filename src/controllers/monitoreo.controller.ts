import {Request, Response} from 'express';
import https from 'https';
import http from 'http';

class MonitoreoController{
    

    //CREATE
    public async create(req:Request, res:Response): Promise<void>{
    }
    
    //READ
    public async read(req:Request, res:Response): Promise<void>{
        const {url, protocol} = req.body;
        let result:any = []         
        let run = (protocol == "https") ? https : http;
        let start = Date.now();
        run.get(url, (resp) => {      
            res.json({
                url: url,
                success: true,
                status: resp.statusCode,
                header: resp.headers,
                time: Date.now() - start
            })   
        }).on('error',(e:any)=>{
            console.log(e)
            res.json({
                url: url,
                success: false,
                status: e.code,
                error: e,
                time: Date.now() - start
            });   
        })
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