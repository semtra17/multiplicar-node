const fs = require('fs');
const argv2 = require("./config/yargs").argv2;
const colors = require("colors");


const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar"); //exportacion del modulo muiltiplicar es IGUAL EN QUE C
// las llave luego de CONST significa la DESTRUCTURACION DE UN MODULO
// let base = "abc";

// argv
// console.log(process.argv);
let argv = process.argv;
let comando = argv2._[0];

switch (comando) {
    case "listar":
        listarTabla(argv2.base, argv2.limite);
        break;

    case "crear":
        crearArchivo(argv2.base, argv2.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log("comando no reconocido");


};

// console.log(argv2.base);
// console.log("Limite:", argv2.limite);




// let parametro = argv[2];
// let base = parametro.split("=")[1];