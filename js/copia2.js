// Variables
const carrito=document.querySelector("#carrito");
const contenedorCarrito=document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn=document.querySelector("#vaciar-carrito");
const listaCursos=document.querySelector("#lista-cursos")
let carritoCursos=[];
// Eventos
cargarEventos();
function cargarEventos(){
    listaCursos.addEventListener("click",agregarCurso);
}
// Funciones
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")){
        const cursoSeleccionado=e.target.parentElement.parentElement;
        leerCurso(cursoSeleccionado);
    }
}
function leerCurso(curso){
    const objCurso={
        img:curso.querySelector('img').src,
        titulo:curso.querySelector('h4').textContent,
        precio:curso.querySelector(".precio span").textContent,
        id:curso.querySelector('a').getAttribute('data-id'),
        cantidad:1,
    }
    //revisa si ya existe un elemento en el carrito
    const existe=carritoCursos.some(curso => curso.id === objCurso.id);
    if(existe){
        const cursos=carritoCursos.map(curso => {
            if(curso.id ===objCurso.id){//actualiza la cantidad
                curso.cantidad++
                return curso
            }
            else{
                return curso//agrega un curso nuevo al carrito
            }
        } )
        carritoCursos=[...cursos];
    }
    else{
        //añade un nuevo curso al carrito
        carritoCursos=[...carritoCursos,objCurso];
    }
   
    carritoHtml();
}
//funcion que genera el html y lo muestra
function carritoHtml(){
    limpiarHtml();
    carritoCursos.forEach(curso =>{
        const {img,titulo,precio,cantidad,id}=curso
        const row =document.createElement('tr');
        row.innerHTML=`<td><img src=${img} width="100"></td>
                       <td>${titulo}</td>
                       <td>${precio}</td>
                       <td>${cantidad}</td>
                       <td><a href="#" class="borrar-curso" data-id=${id}>x</a></td>
                       `                       
        contenedorCarrito.appendChild(row);
    })
}
function limpiarHtml(){
    //elimina el html
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}