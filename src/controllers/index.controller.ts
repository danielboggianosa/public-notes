import {Request, Response} from 'express';
import fs from 'fs'

class IndexController{
    

    //CREATE
    public async create(req:Request, res:Response): Promise<void>{
        const {titulo, contenido} = req.body
        let raw:any = fs.readFileSync('notes.json')
        let notas = JSON.parse(raw)
        let newNote = {
            titulo: titulo,
            contenido: contenido,
            createdAt: new Date(),
            expires: "24h"
        }
        notas.notas.push(newNote)
        fs.writeFileSync('notes.json', notas)
        res.render('index',notas)
    }
    
    //READ
    public async read(req:Request, res:Response): Promise<void>{
        let raw:any = fs.readFileSync('notes.json')
        let notas = JSON.parse(raw)
        res.render('index',notas)
    }

    //READ
    public async crearForm(req:Request, res:Response): Promise<void>{
        let raw:any = fs.readFileSync('notes.json')
        let notas = JSON.parse(raw)
        res.render('crear',notas)
    }
    
    //UPDATE
    public async update(req:Request, res:Response): Promise<void>{
        res.json({message: 'Accediendo al método ACTUALIZAR'});
    }
    
    //DELTE
    public async delte(req:Request, res:Response): Promise<void>{
        res.json({message: 'Accediendo al método BORRAR'});
    }


}
const indexController = new IndexController();
export default indexController;