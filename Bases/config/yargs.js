const opt = {
    base: {
        demand: true,
        alias: "b",
    },
    limite: {
        alias: "l", //manera abreviada de llamar esta caracteristica delobjeto
        default: 10,

    },

}

const argv2 = require("yargs")
    .command("listar", "Imprime en consola la tabla de multiplicar", opt)
    .command("crear", "Genera una tabla de multiplicar", opt)
    .help()
    .argv;

module.exports = {
    argv2,
}