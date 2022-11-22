"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("./lib");
function execute() {
    const pessoa = new lib_1.Pessoa("Mauricio", 34);
    pessoa.email = "emial@mail.com";
    pessoa.endereco = "R. nothing";
    console.log(pessoa);
}
exports.default = execute;
