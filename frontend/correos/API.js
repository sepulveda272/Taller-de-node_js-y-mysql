const url = "http://localhost:5000/api/correos"
const urlN = "http://localhost:5000/api/correos/add"
const urlD = "http://localhost:5000/api/correos/del"
const urlA = "http://localhost:5000/api/correos/upd"



export const obtainCorreos = async () => {
    try {
        const correos = await fetch(url);
        const datoCorreos = await correos.json();
        return datoCorreos;
    } catch (error) {
        console.log(error,"no sirve");
    }
};


export const nuevaCorreo = async (correo) => {
    try {
        await fetch(urlN,{
            method: "POST",
            body:JSON.stringify(correo),
            headers:{'Content-Type':'application/json'}
        });
        window.location.href ="correos.html"
    } catch (error) {
        console.log(error,"no sirve");
    }
};


export const deleteCorreos = async (id) => {
  try {
        await fetch(`${urlD}/${id}`,{
            method:'DELETE'
        })
        window.location.href ="correos.html"
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




export const editarCorreo = async (datos) => {
    try {
        await fetch(`${urlA}/${datos.CorreoID}`, {
            method: "PUT",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(datos)
        }).then(response => response.json()).then(updatedDatos => {
            console.log('Datos actualizados:', updatedDatos);
        });
        window.location.href ="correos.html"
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
    }
};



