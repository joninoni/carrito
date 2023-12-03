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
    carritoCursos=[...carritoCursos,objCurso];
    carritoHtml();
}
//funcion que genera el html y lo muestra
function carritoHtml(){
    carritoCursos.forEach(curso =>{
        const row =document.createElement('tr');
        row.innerHTML=`<td><img src=${curso.img} width="100"></td>
                       <td>${curso.titulo}</td>
                       <td>${curso.precio}</td>
                       <td>${curso.cantidad}</td>
                       `                       
        contenedorCarrito.appendChild(row);
    })
}