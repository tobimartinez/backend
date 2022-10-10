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
        this.libros = libros || [];
        this.mascotas = mascotas || [];
    }

    getFullName (){
        return `tu nombre completo es ${this.nombre} ${this.apellido}`;
    }

    addMascotas(newMascota){
        this.mascotas.push(newMascota);
    }

    contadorMascotas(){
        return this.mascotas.length;
    }

    addBook(nombre, autor){
        this.libros.push({nombre,autor});
    }

    getBookNames(){
        return this.libros.map(({nombre}) => nombre).join("","");
    }
}




const usuario1 = new Usuario("Tobias","Martinez",libros,mascotas);

usuario1.addMascotas("anakin");
console.log(usuario1);
console.log(usuario1.getFullName());


console.log(`este usuario tiene ${usuario1.contadorMascotas()} mascotas.`);


usuario1.addBook("Lionel Messi","Lionel Messi");
usuario1.addBook("El principito","Agustin Rita");

console.log(`Libros del usuario: ${usuario1.getBookNames()}`);


