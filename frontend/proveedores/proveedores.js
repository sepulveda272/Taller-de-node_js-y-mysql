import { obtainProveedores,nuevoProveedor,deleteProveedor, editarProveedor } from "./API.js";


// Year en footer actual 
const a = document.getElementById("yearActual").textContent = new Date().getFullYear();
console.log(a);

document.addEventListener("DOMContentLoaded", () => {
    mostrarLista()

});
const tablaProveedor = document.querySelector("#proveedor");
tablaProveedor.addEventListener('click', confirmDelete)



/* LISTAR CATEGORIAS  - CRUD (R) */

async function mostrarLista(){
    const proveedores = await obtainProveedores();
    proveedores.forEach(element => {
        const {ProveedorID,Compania,Contacto,Titulo,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Fax,Pagina} = element
        tablaProveedor.innerHTML+=`
        <tr>
            <td>${ProveedorID}</td>
            <td>${Compania}</td>
            <td>${Contacto}</td>
            <td>${Titulo}</td>
            <td>${Direccion}</td>
            <td>${Ciudad}</td>
            <td>${Regiones}</td>
            <td>${CodigoPostal}</td>
            <td>${Pais}</td>
            <td>${Telefono}</td>
            <td>${Fax}</td>
            <td>${Pagina}</td>
            <th><a class="btn btn-success editar" idActualizar="${ProveedorID}" data-bs-toggle="modal" data-bs-target="#updateCategory" data-bs-whatever="@getbootstrap">EDITAR</a></th>
            <th><a data-proveedor="${ProveedorID}"  class="btn btn-danger delete">ELIMINAR</a></th>
          </tr>
        `
    })
}

/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */

const formulario = document.querySelector("#formulario")
formulario.addEventListener('submit', validarProveedor)

function validarProveedor(e){
    e.preventDefault();
    const Compania = document.querySelector("#Compania").value;
    const Contacto = document.querySelector("#Contacto").value;
    const Titulo = document.querySelector("#Titulo").value;
    const Direccion = document.querySelector("#Direccion").value;
    const Ciudad = document.querySelector("#Ciudad").value;
    const Regiones = document.querySelector("#Regiones").value;
    const CodigoPostal = document.querySelector("#CodigoPostal").value;
    const Pais = document.querySelector("#Pais").value;
    const Telefono = document.querySelector("#Telefono").value;
    const Fax = document.querySelector("#Fax").value;
    const Pagina = document.querySelector("#Pagina").value;

    const proveedor = {
        Compania,
        Contacto,
        Titulo,
        Direccion,
        Ciudad,
        Regiones,
        CodigoPostal,
        Pais,
        Telefono,
        Fax,
        Pagina
    }
    if(validate(proveedor)){
        alert ('todos los campos son obligatirios')
        return 
        
    }

    nuevoProveedor (proveedor)

}





/* ELIMINAR CATEGORIA  - CRUD (D) */

function confirmDelete(e){
    if(e.target.classList.contains('delete')){
        const ProveedorID = parseInt(e.target.dataset.proveedor)
        console.log(ProveedorID);
        const confirmar = confirm('¿DESEAS ELIMNAR AL PROVEEDOR?')
        if(confirmar){
            deleteProveedor(ProveedorID)
        }   
    }
}





//EDITAR CATEGORIA - CRUD (U)const 
const nuevosDatos = document.querySelector('#proveedor')
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
        const  Contacto = document.querySelector('#ContactoUpdate').value;
        const  Titulo = document.querySelector('#TituloUpdate').value;
        const Direccion = document.querySelector("#DireccionUpdate").value;
        const Ciudad = document.querySelector("#CiudadUpdate").value;
        const Regiones = document.querySelector("#RegionesUpdate").value;
        const CodigoPostal = document.querySelector("#CodigoPostalUpdate").value;
        const Pais = document.querySelector("#PaisUpdate").value;
        const Telefono = document.querySelector("#TelefonoUpdate").value;
        const Fax = document.querySelector("#FaxUpdate").value;
        const Pagina = document.querySelector("#PaginaUpdate").value;
        console.log(Compania);
        
    
        const datos={
            ProveedorID:idActualizar,
            Compania,
            Contacto,
            Titulo,
            Direccion,
            Ciudad,
            Regiones,
            CodigoPostal,
            Pais,
            Telefono,
            Fax,
            Pagina
        }
        console.log(datos);
    
        editarProveedor(datos)
    }  

    }

    }

 function validate(objeto){
    return !Object.values(objeto).every( element => element !=='');

} 