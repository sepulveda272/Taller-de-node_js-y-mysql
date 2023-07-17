import { obtainRegiones,nuevaRegion,deleteRegion,editarRegiones } from "./API.js";


// Year en footer actual 
const a = document.getElementById("yearActual").textContent = new Date().getFullYear();
console.log(a);

document.addEventListener("DOMContentLoaded", () => {
    mostrarLista()

});
const tablaCategoria = document.querySelector("#regiones");
tablaCategoria.addEventListener('click', confirmDelete)



/* LISTAR CATEGORIAS  - CRUD (R) */

async function mostrarLista(){
    const regiones = await obtainRegiones();
    regiones.forEach(element => {
        const {RegionesID,RegionesDescripcion} = element
        tablaCategoria.innerHTML+=`
        <tr>
            <td>${RegionesID}</td>
            <td>${RegionesDescripcion}</td>
            <th><a class="btn btn-success editar" idActualizar="${RegionesID}" data-bs-toggle="modal" data-bs-target="#updateCategory" data-bs-whatever="@getbootstrap">EDITAR</a></th>
            <th><a data-region="${RegionesID}"  class="btn btn-danger delete">ELIMINAR</a></th>
          </tr>
        `
    })
}

/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */

const formulario = document.querySelector("#formulario")
formulario.addEventListener('submit', validarRegion)

function validarRegion(e){
    e.preventDefault();
    
    const RegionesDescripcion = document.querySelector("#RegionesDescripcion").value;
    const region = {
        RegionesDescripcion
    }
    if(validate(region)){
        alert ('todos los campos son obligatirios')
        return 
        
    }

    nuevaRegion(region)

}





/* ELIMINAR CATEGORIA  - CRUD (D) */

function confirmDelete(e){
    if(e.target.classList.contains('delete')){
        const RegionesID = parseInt(e.target.dataset.region)
        console.log(RegionesID);
        const confirmar = confirm('¿DESEAS ELIMNAR LA REGION?')
        if(confirmar){
            deleteRegion(RegionesID)
        }   
    }
}





//EDITAR CATEGORIA - CRUD (U)const 
const nuevosDatos = document.querySelector('#regiones')
nuevosDatos.addEventListener('click',actualizar)


function actualizar(e){
    e.preventDefault();
  
    if(e.target.classList.contains('editar')){
        
        const idActualizar= e.target.getAttribute('idActualizar')
        console.log(idActualizar);

        const datosNuw = document.querySelector('#formularioUpdate')
        datosNuw.addEventListener('submit',uppdateRegion)
    
    function uppdateRegion(e){
        e.preventDefault();
        
        const  RegionesDescripcion = document.querySelector('#RegionesDescripcionUpdate').value;
        
        const datos={
            RegionesID:idActualizar,
            RegionesDescripcion
        }
        console.log(datos);
    
        editarRegiones  (datos)
    }  

    }

    }

 function validate(objeto){
    return !Object.values(objeto).every( element => element !=='');

} 