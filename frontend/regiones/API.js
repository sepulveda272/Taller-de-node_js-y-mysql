const url = "http://localhost:5000/api/regiones"
const urlN = "http://localhost:5000/api/regiones/add"
const urlD = "http://localhost:5000/api/regiones/del"
const urlA = "http://localhost:5000/api/regiones/upd"



export const obtainRegiones = async () => {
    try {
        const regiones = await fetch(url);
        const datosRegiones = await regiones.json();
        return datosRegiones;
    } catch (error) {
        console.log(error,"no sirve");
    }
};


export const nuevaRegion = async (region) => {
    try {
        await fetch(urlN,{
            method: "POST",
            body:JSON.stringify(region),
            headers:{'Content-Type':'application/json'}
        });
        window.location.href ="regiones.html"
    } catch (error) {
        console.log(error,"no sirve");
    }
};


export const deleteRegion = async (id) => {
    try {
        await fetch(`${urlD}/${id}`,{
            method:'DELETE'
        })
        window.location.href ="regiones.html"
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




export const editarRegiones = async (datos) => {
    try {
        await fetch(`${urlA}/${datos.RegionesID}`, {
            method: "PUT",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(datos)
        }).then(response => response.json()).then(updatedDatos => {
            console.log('Datos actualizados:', updatedDatos);
        });
        window.location.href ="regiones.html"
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
    }
};



