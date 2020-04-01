import {Request, Response} from 'express';
import fs from 'fs'

class NotasController{
    

    //CREATE
    public async create(req:Request, res:Response): Promise<void>{
        const {titulo, contenido} = req.body
        let raw:any = fs.readFileSync('data/notes.json')
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
        let write = JSON.stringify(json,null,"\t")
        fs.writeFileSync('data/notes.json', write)
        res.json({success:true,message:"Nota Creada"})
    }
    
    //READ
    public async read(req:Request, res:Response): Promise<void>{
        const { buscar } = req.params
        let raw:any = fs.readFileSync('data/notes.json')
        let json = JSON.parse(raw)
        let notas = json.notas
        json.notas.forEach((n:any, notas:number)=>{
            let creado = new Date(n.createdAt).getHours()
            let now = new Date().getHours()
            if((now - creado) > 24)
                json.notas.splice(notas, 1)
        })
        if(buscar)
            json.notas = notas.reverse().filter((n:any)=>n.titulo.toLowerCase().includes(buscar.toLowerCase()) || n.contenido.toLowerCase().includes(buscar.toLowerCase()));
        res.json(json.notas)
    }

    //UPDATE
    public async update(req:Request, res:Response): Promise<void>{
        res.json({message: 'Accediendo al método ACTUALIZAR'});
    }
    
    //DELTE
    public async delete(req:Request, res:Response): Promise<void>{
        const {index} = req.params
        let raw:any = fs.readFileSync('data/notes.json')
        let json = JSON.parse(raw)
        let notas = json.notas;
        for(let i=0;i<notas.length;i++){
            // console.log(notas[i].id,i,notas)
            if(notas[i]['id'] == index){
                notas.splice(i,1)
                let write = JSON.stringify(json, null, "\t")
                fs.writeFileSync('data/notes.json', write)
                res.json({success:true, notas:json.notas})
                break
            }
        }
    }


}
const notasController = new NotasController();
export default notasController;