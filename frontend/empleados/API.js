const url = "http://localhost:5000/api/empleados"
const urlN = "http://localhost:5000/api/empleados/add"
const urlD = "http://localhost:5000/api/empleados/del"
const urlA = "http://localhost:5000/api/empleados/upd"



export const obtainEmpleados = async () => {
    try {
        const empleados = await fetch(url);
        const datoEmpleado = await empleados.json();
        return datoEmpleado;
    } catch (error) {
        console.log(error,"no sirve");
    }
};


export const nuevoEmpleado = async (empleado) => {
    try {
        await fetch(urlN,{
            method: "POST",
            body:JSON.stringify(empleado),
            headers:{'Content-Type':'application/json'}
        });
        window.location.href ="empleados.html"
    } catch (error) {
        console.log(error,"no sirve");
    }
};


export const deleteEmpleado = async (id) => {
  try {
        await fetch(`${urlD}/${id}`,{
            method:'DELETE'
        })
        window.location.href ="empleados.html"
    } catch (error) {
        console.log(error);
    }
};


/* export const obtenerEmpleado = async (id) => {
    try {
        await fetch(`${url}/${id}`,{
            method:'POST'
        })
    } catch (error) {
        console.log(error);
    }
}; */




export const editarEmpleado = async (datos) => {
    try {
        await fetch(`${urlA}/${datos.EmpleadoID}`, {
            method: "PUT",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(datos)
        }).then(response => response.json()).then(updatedDatos => {
            console.log('Datos actualizados:', updatedDatos);
        });
        window.location.href ="empleados.html"
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
    }
};



