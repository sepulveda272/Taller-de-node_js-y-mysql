import { obtainEmpleados,nuevoEmpleado,deleteEmpleado, editarEmpleado } from "./API.js";


// Year en footer actual 
const a = document.getElementById("yearActual").textContent = new Date().getFullYear();
console.log(a);

document.addEventListener("DOMContentLoaded", () => {
    mostrarLista()

});
const tablaEmpleados = document.querySelector("#empleados");
tablaEmpleados.addEventListener('click', confirmDelete)



/* LISTAR CATEGORIAS  - CRUD (R) */

async function mostrarLista(){
    const empleados = await obtainEmpleados();
    empleados.forEach(element => {
        const {EmpleadoID,Apellido,Nombre,Titulo,TituloCortesia,FechaNacimiento,FechaContratacion,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Foto,Notas,Jefe} = element
        tablaEmpleados.innerHTML+=`
        <tr>
            <td>${EmpleadoID}</td>
            <td>${Apellido}</td>
            <td>${Nombre}</td>
            <td>${Titulo}</td>
            <td>${TituloCortesia}</td>
            <td>${FechaNacimiento}</td>
            <td>${FechaContratacion}</td>
            <td>${Direccion}</td>
            <td>${Ciudad}</td>
            <td>${Regiones}</td>
            <td>${CodigoPostal}</td>
            <td>${Pais}</td>
            <td>${Telefono}</td>
            <td>${Foto}</td>
            <td>${Notas}</td>
            <td>${Jefe}</td>
            <th><a class="btn btn-success editar" idActualizar="${EmpleadoID}" data-bs-toggle="modal" data-bs-target="#updateCategory" data-bs-whatever="@getbootstrap">EDITAR</a></th>
            <th><a data-empleado="${EmpleadoID}"  class="btn btn-danger delete">ELIMINAR</a></th>
          </tr>
        `
    })
}

/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */

const formulario = document.querySelector("#formulario")
formulario.addEventListener('submit', validarEmpleado)

function validarEmpleado(e){
    e.preventDefault();
    const Apellido = document.querySelector("#Apellido").value;
    const Nombre = document.querySelector("#Nombre").value;
    const Titulo = document.querySelector("#Titulo").value;
    const TituloCortesia = document.querySelector("#TituloCortesia").value;
    const FechaNacimiento = document.querySelector("#FechaNacimiento").value;
    const FechaContratacion = document.querySelector("#FechaContratacion").value;
    const Direccion = document.querySelector("#Direccion").value;
    const Ciudad = document.querySelector("#Ciudad").value;
    const Regiones = document.querySelector("#Regiones").value;
    const CodigoPostal = document.querySelector("#CodigoPostal").value;
    const Pais = document.querySelector("#Pais").value;
    const Telefono = document.querySelector("#Telefono").value;
    const Foto = document.querySelector("#Foto").value;
    const Notas = document.querySelector("#Notas").value;
    const Jefe = document.querySelector("#Jefe").value;

    const empleado = {
        Apellido,
        Nombre,
        Titulo,
        TituloCortesia,
        FechaNacimiento,
        FechaContratacion,
        Direccion,
        Ciudad,
        Regiones,
        CodigoPostal,
        Pais,
        Telefono,
        Foto,
        Notas,
        Jefe
    }

    console.log(empleado);

    if(validate(empleado)){
        alert ('todos los campos son obligatirios')
        return 
        
    }

    nuevoEmpleado(empleado)

}





/* ELIMINAR CATEGORIA  - CRUD (D) */

function confirmDelete(e){
    if(e.target.classList.contains('delete')){
        const EmpleadoID = parseInt(e.target.dataset.empleado)
        console.log(EmpleadoID);
        const confirmar = confirm('¿DESEAS ELIMNAR AL EMPLEADO?')
        if(confirmar){
            deleteEmpleado(EmpleadoID)
        }   
    }
}





//EDITAR CATEGORIA - CRUD (U)const 
const nuevosDatos = document.querySelector('#empleados')
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
        
        const  Apellido = document.querySelector('#ApellidoUpdate').value;
        const  Nombre = document.querySelector('#NombreUpdate').value;
        const  Titulo = document.querySelector('#TituloUpdate').value;
        const TituloCortesia = document.querySelector("#TituloCortesiaUpdate").value;
        const FechaNacimiento = document.querySelector("#FechaNacimientoUpdate").value;
        const FechaContratacion = document.querySelector("#FechaContratacionUpdate").value;
        const Direccion = document.querySelector("#DireccionUpdate").value;
        const Ciudad = document.querySelector("#CiudadUpdate").value;
        const Regiones = document.querySelector("#RegionesUpdate").value;
        const CodigoPostal = document.querySelector("#CodigoPostalUpdate").value;
        const Pais = document.querySelector("#PaisUpdate").value;
        const Telefono = document.querySelector("#TelefonoUpdate").value;
        const Foto = document.querySelector("#FotoUpdate").value;
        const Notas = document.querySelector("#NotasUpdate").value;
        const Jefe = document.querySelector("#JefeUpdate").value;
        console.log(Apellido);
        
    
        const datos={
            EmpleadoID:idActualizar,
            Apellido,
            Nombre,
            Titulo,
            TituloCortesia,
            FechaNacimiento,
            FechaContratacion,
            Direccion,
            Ciudad,
            Regiones,
            CodigoPostal,
            Pais,
            Telefono,
            Foto,
            Notas,
            Jefe
        }
        console.log(datos);
    
        editarEmpleado(datos)
    }  

    }

    }

 function validate(objeto){
    return !Object.values(objeto).every( element => element !=='');

} 