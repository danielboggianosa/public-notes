class Notas {

    notas

    constructor(){
        this.obtener()
    }

    _render(){
        $('#notas').html('')
        this.notas.reverse().forEach(n=>{
            $('#notas').append(`
                <div class="col-sm-6 p-1">
                    <div class="card shadow">
                        <div class="card-header">
                            <h5>${n.titulo}
                                <button class="btn float-right" onclick="notas.delete(${n.id})">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </h5>
                        </div>
                        <div class="card-body">
                            ${this.processText(n.contenido)}
                        </div>
                        <div class="card-footer">
                            ${new Date(n.createdAt)}
                        </div>
                    </div>
                </div>
            `)
        })
    }
    
    obtener(value=""){
        $.ajax({
            url:"/api/notas/"+value,
            type:"GET",
            success: res=>{
                this.notas = res
                this._render()
            }
        })
    }

    delete(value){
        $.ajax({
            url:"/api/notas/"+value,
            type:"DELETE",
            success: (res)=>{
                if(res.success)
                    this.notas = res.notas
                this._render()
            }
        })
    } 

    processText(texto){
        let tag = texto.split('::')[0]
        switch(tag){
            case 'a':
                let enlace = texto.split('a::')[1]
                return `<a href="${enlace}">${enlace}</a>`
                break;
            case 'li':
                let lista=""
                texto.split('li::').forEach(li=>{
                    if(li)
                        lista +='<li class="list-group-item">'+this.processText(li)+'</li>'
                })
                let ul = '<ul class="list-group">'+lista+'</ul>'
                return ul
                break;
            default:
                return `${texto}`
        }
    }           
}
const notas = new Notas()
export default notas