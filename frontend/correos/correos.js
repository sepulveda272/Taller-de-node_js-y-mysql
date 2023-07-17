import { obtainCorreos,nuevaCorreo,deleteCorreos, editarCorreo } from "./API.js";


// Year en footer actual 
const a = document.getElementById("yearActual").textContent = new Date().getFullYear();
console.log(a);

document.addEventListener("DOMContentLoaded", () => {
    mostrarLista()

});
const tablaCorreos = document.querySelector("#correos");
tablaCorreos.addEventListener('click', confirmDelete)



/* LISTAR CATEGORIAS  - CRUD (R) */

async function mostrarLista(){
    const correos = await obtainCorreos();
    console.log(correos);
    correos.forEach(element => {
        const {CorreoID,Compania,Telefono,} = element
        tablaCorreos.innerHTML+=`
        <tr>
            <td>${CorreoID}</td>
            <td>${Compania}</td>
            <td>${Telefono}</td>
            <th><a class="btn btn-success editar" idActualizar="${CorreoID}" data-bs-toggle="modal" data-bs-target="#updateCategory" data-bs-whatever="@getbootstrap">EDITAR</a></th>
            <th><a data-correo="${CorreoID}"  class="btn btn-danger delete">ELIMINAR</a></th>
          </tr>
        `
    })
}

/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */

const formulario = document.querySelector("#formulario")
formulario.addEventListener('submit', validarCategoria)

function validarCategoria(e){
    e.preventDefault();
    const Compania = document.querySelector("#Compania").value;
    const Telefono = document.querySelector("#Telefono").value;

    const correo = {
        Compania,
        Telefono,
        
    }
    if(validate(correo)){
        alert ('todos los campos son obligatirios')
        return 
        
    }

    nuevaCorreo (correo)

}





/* ELIMINAR CATEGORIA  - CRUD (D) */

function confirmDelete(e){
    if(e.target.classList.contains('delete')){
        const CorreoID = parseInt(e.target.dataset.correo)
        console.log(CorreoID);
        const confirmar = confirm('¿DESEAS ELIMNAR EL CORREO?')
        if(confirmar){
            deleteCorreos(CorreoID)
        }   
    }
}





//EDITAR CATEGORIA - CRUD (U)const 
const nuevosDatos = document.querySelector('#correos')
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
        
        const  Compania = document.querySelector('#CompaniaUpdate').value;
        const  Telefono = document.querySelector('#TelefonoUpdate').value;
    
        const datos={
            CorreoID:idActualizar,
            Compania,
            Telefono,
            
        }
        console.log(datos);
    
        editarCorreo(datos)
    }  

    }

    }

 function validate(objeto){
    return !Object.values(objeto).every( element => element !=='');

} 