import {Request, Response} from 'express';
import fs from 'fs'

class IndexController{
    

    //CREATE
    public async create(req:Request, res:Response): Promise<void>{
        const {titulo, contenido} = req.body
        let raw:any = fs.readFileSync('notes.json')
        let json = JSON.parse(raw)
        let notas = json.notas
        json.lastId++
        let newNote = {
            id:json.lastId,
            titulo: titulo,
            contenido: contenido,
            createdAt: new Date()
        }
        notas.push(newNote)
        let write = JSON.stringify(json)
        fs.writeFileSync('notes.json', write)
        res.json({success:true,message:"Nota Creada"})
    }
    
    //READ
    public async read(req:Request, res:Response): Promise<void>{
        let raw:any = fs.readFileSync('notes.json')
        let json = JSON.parse(raw)
        let notas = json.notas
        notas.forEach((n:any, index:number)=>{
            let creado = new Date(n.createdAt).getHours()
            let now = new Date().getHours()
            if((now - creado) > 24)
                notas.splice(index, 1)
        })
        notas.reverse();
        res.render('index',json)
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
    public async delete(req:Request, res:Response): Promise<void>{
        const {index} = req.params
        let raw:any = fs.readFileSync('notes.json')
        let json = JSON.parse(raw)
        let notas = json.notas;
        let end = false
        for(let i=0;i<notas.length;i++){
            // console.log(notas[i].id,i,index)
            if(notas[i]['id'] == index){
                notas.splice(i,1)
                let write = JSON.stringify(json)
                fs.writeFileSync('notes.json', write)
                res.json({success:true})
                break
            }
        }
    }


}
const indexController = new IndexController();
export default indexController;