import {Request, Response} from 'express';
import fs from 'fs'

class LibrosController{
    

    //CREATE
    public async create(req:Request, res:Response): Promise<void>{
        const {titulo, contenido} = req.body
        let raw:any = fs.readFileSync('data/libros.json')
        let json = JSON.parse(raw)
        let libros = json.libros
        json.lastId++
        let newNote = {
            id:json.lastId,
            titulo: titulo,
            contenido: contenido,
            createdAt: new Date()
        }
        libros.push(newNote)
        let write = JSON.stringify(json,null,"\t")
        fs.writeFileSync('data/libros.json', write)
        res.json({success:true,message:"Nota Creada"})
    }
    
    //READ
    public async read(req:Request, res:Response): Promise<void>{
        const { buscar } = req.params
        let raw:any = fs.readFileSync('data/libros.json')
        let json = JSON.parse(raw)
        let libros = json.libros
        json.libros.forEach((n:any, libros:number)=>{
            let creado = new Date(n.createdAt).getHours()
            let now = new Date().getHours()
            if((now - creado) > 24)
                json.libros.splice(libros, 1)
        })
        if(buscar)
            json.libros = libros.reverse().filter((n:any)=>n.titulo.toLowerCase().includes(buscar.toLowerCase()) || n.contenido.toLowerCase().includes(buscar.toLowerCase()));
        res.json(json.libros)
    }

    //UPDATE
    public async update(req:Request, res:Response): Promise<void>{
        res.json({message: 'Accediendo al método ACTUALIZAR'});
    }
    
    //DELTE
    public async delete(req:Request, res:Response): Promise<void>{
        const {index} = req.params
        let raw:any = fs.readFileSync('data/libros.json')
        let json = JSON.parse(raw)
        let libros = json.libros;
        for(let i=0;i<libros.length;i++){
            if(libros[i]['id'] == index){
                libros.splice(i,1)
                let write = JSON.stringify(json, null, "\t")
                fs.writeFileSync('data/libros.json', write)
                res.json({success:true, libros:json.libros})
                break
            }
        }
    }


}
const librosController = new LibrosController();
export default librosController;