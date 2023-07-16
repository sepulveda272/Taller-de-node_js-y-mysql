import { obtainCategories,nuevaCategoria,deleteCategory, editarCategory } from "./API.js";


// Year en footer actual 
const a = document.getElementById("yearActual").textContent = new Date().getFullYear();
console.log(a);

document.addEventListener("DOMContentLoaded", () => {
    mostrarLista()

});
const tablaCategoria = document.querySelector("#categories");
tablaCategoria.addEventListener('click', confirmDelete)



/* LISTAR CATEGORIAS  - CRUD (R) */

async function mostrarLista(){
    const categorias = await obtainCategories();
    categorias.forEach(element => {
        const {CategoriaID,CategoriaNombre,Descripcion,Imagen} = element
        tablaCategoria.innerHTML+=`
        <tr>
            <td>${CategoriaID}</td>
            <td>${CategoriaNombre}</td>
            <td>${Descripcion}</td>
            <td>${Imagen}</td>
            <th><a class="btn btn-success editar" idActualizar="${CategoriaID}" data-bs-toggle="modal" data-bs-target="#updateCategory" data-bs-whatever="@getbootstrap">EDITAR</a></th>
            <th><a data-categoria="${CategoriaID}"  class="btn btn-danger delete">ELIMINAR</a></th>
          </tr>
        `
    })
}

/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */

const formulario = document.querySelector("#formulario")
formulario.addEventListener('submit', validarCategoria)

function validarCategoria(e){
    e.preventDefault();
    const CategoriaNombre = document.querySelector("#CategoriaNombre").value;
    const Descripcion = document.querySelector("#Descripcion").value;
    const Imagen = document.querySelector("#Imagen").value;

    const categoria = {
        CategoriaNombre,
        Descripcion,
        Imagen
    }
    if(validate(categoria)){
        alert ('todos los campos son obligatirios')
        return 
        
    }

    nuevaCategoria (categoria)

}





/* ELIMINAR CATEGORIA  - CRUD (D) */

function confirmDelete(e){
    if(e.target.classList.contains('delete')){
        const categoriaID = parseInt(e.target.dataset.categoria)
        console.log(categoriaID);
        const confirmar = confirm('¿DESEAS ELIMNAR LA CATEGORIA?')
        if(confirmar){
            deleteCategory(categoriaID)
        }   
    }
}





//EDITAR CATEGORIA - CRUD (U)const 
const nuevosDatos = document.querySelector('#categories')
nuevosDatos.addEventListener('click',actualizar)


function actualizar(e){
    e.preventDefault();
  
    if(e.target.classList.contains('editar')){
        
        const idActualizar= e.target.getAttribute('idActualizar')
        console.log(idActualizar);

        const datosNuw = document.querySelector('#formularioUpdate')
        datosNuw.addEventListener('submit',uppdateCategoria)
    
    function uppdateCategoria(e){
        e.preventDefault();
        
        const  CategoriaNombre = document.querySelector('#CategoriaNombreUpdate').value;
        const  Descripcion = document.querySelector('#DescripcionUpdate').value;
        const  Imagen = document.querySelector('#ImagenUpdate').value;
        console.log(CategoriaNombre);
        
    
        const datos={
            CategoriaID:idActualizar,
            CategoriaNombre,
            Descripcion,
            Imagen
        }
        console.log(datos);
    
        editarCategory(datos)
    }  

    }

    }

 function validate(objeto){
    return !Object.values(objeto).every( element => element !=='');

} 