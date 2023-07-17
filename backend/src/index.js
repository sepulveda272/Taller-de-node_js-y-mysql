import app from "./app.js";

const main = () =>{
    app.listen(app.get("port"));
    console.log(`por fin no toca estar tumbando el servidor ${app.get('port')}`);
}

main();