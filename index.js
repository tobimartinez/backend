// function mostrarLista (lista){

//     if(lista.lenght > 0){
//     console.log('lista vacia') 
//     }else{
//          console.log(lista);
//     }

    
 
// }
// const lista=[];

// mostrarLista(lista);

const martinFierro = "Martin Fierro"
const biblia = "Biblia"

const libros = [martinFierro,biblia] ;
const mascotas = ["azoka"];

class Usuario{
    constructor(nombre,apellido,libros,mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
}

const usuario1 = new Usuario("Tobias","Martinez",libros,mascotas);


console.log(usuario1);