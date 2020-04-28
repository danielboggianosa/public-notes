import {Request, Response} from 'express';
import fs from 'fs'

class IndexController{
    

    //CREATE
    public async create(req:Request, res:Response): Promise<void>{
    }
    
    //READ
    public async read(req:Request, res:Response): Promise<void>{
        res.render('index')
    }
    
    //READ
    public async monitoreo(req:Request, res:Response): Promise<void>{
        res.render('admin/monitoreo')
    }

    //READ
<<<<<<< HEAD
    
=======
    public async libro(req:Request, res:Response): Promise<void>{
        const {id, pagina} = req.params
        let raw:any = fs.readFileSync('data/libros.json')
        let json = JSON.parse(raw)
        let libros = json.libros;
        for(let i=0;i<libros.length;i++){
            let libro = libros[i]
            if(libro['id'] == id){
                let contenido = fs.readFileSync(`views/libros/${libro.slug}/${libro.slug.split('-').join('_')}_${pagina}.html`,'utf8')
                res.render(`libros/index`,{pagina:contenido})
                break
            }
        }
    }
>>>>>>> 816483171486208ee623bdf9c574729f138c3906

    //READ
    public async crear(req:Request, res:Response): Promise<void>{
        res.render('crear')
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
        let end = false
        for(let i=0;i<notas.length;i++){
            // console.log(notas[i].id,i,index)
            if(notas[i]['id'] == index){
                notas.splice(i,1)
                let write = JSON.stringify(json)
                fs.writeFileSync('data/notes.json', write)
                res.json({success:true})
                break
            }
        }
    }


}
const indexController = new IndexController();
export default indexController;