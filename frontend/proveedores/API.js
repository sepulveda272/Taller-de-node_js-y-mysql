const url = "http://localhost:5000/api/proveedores"
const urlN = "http://localhost:5000/api/proveedores/add"
const urlD = "http://localhost:5000/api/proveedores/del"
const urlA = "http://localhost:5000/api/proveedores/upd"



export const obtainProveedores = async () => {
    try {
        const proveedores = await fetch(url);
        const datoProveedores = await proveedores.json();
        return datoProveedores;
    } catch (error) {
        console.log(error,"no sirve");
    }
};


export const nuevoProveedor = async (proveedor) => {
    try {
        await fetch(urlN,{
            method: "POST",
            body:JSON.stringify(proveedor),
            headers:{'Content-Type':'application/json'}
        });
        window.location.href ="proveedores.html"
    } catch (error) {
        console.log(error,"no sirve");
    }
};


export const deleteProveedor = async (id) => {
  try {
        await fetch(`${urlD}/${id}`,{
            method:'DELETE'
        })
        window.location.href ="proveedores.html"
    } catch (error) {
        console.log(error);
    }
};


/* export const obtenerCategory = async (id) => {
    try {
        await fetch(`${url}/${id}`,{
            method:'POST'
        })
    } catch (error) {
        console.log(error);
    }
}; */




export const editarProveedor = async (datos) => {
    try {
        await fetch(`${urlA}/${datos.ProveedorID}`, {
            method: "PUT",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(datos)
        }).then(response => response.json()).then(updatedDatos => {
            console.log('Datos actualizados:', updatedDatos);
        });
        window.location.href ="proveedores.html"
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
    }
};



