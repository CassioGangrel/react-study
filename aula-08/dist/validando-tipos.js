"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isVeiculo2Portas(veiculo) {
    if (veiculo.portas === 2)
        return true;
    return false;
}
function isVeiculo4Portas(veiculo) {
    if (veiculo.portas === 4)
        return true;
    return false;
}
function novoVeiculo(portas, cor, rodas) {
    return {
        cor,
        portas,
        rodas,
    };
}
function entregarVeiculo2Portas(veiculo) {
    console.log("Veiculo 2 portas entrege", veiculo);
}
function entregarVeiculo4Portas(veiculo) {
    console.log("Veiculo 4 portas entrege", veiculo);
}
function construirMensage() {
    const textMessage = {
        conteudo: "Sou um texto",
        type: "TEXTO",
        comprimentoDoText: 12,
    };
    return textMessage;
}
function escreveMensagem(msg) {
    console.log(msg.conteudo);
}
function rodarVideo(msg) {
    console.log(msg.conteudo);
}
function execute() {
    const veiculo2Portas = novoVeiculo(2, "verde", 4);
    const veiculo4Portas = novoVeiculo(4, "vermelho", 4);
    if (!isVeiculo2Portas(veiculo2Portas))
        return;
    if (!isVeiculo4Portas(veiculo4Portas))
        return;
    entregarVeiculo2Portas(veiculo2Portas);
    entregarVeiculo4Portas(veiculo4Portas);
    const msg = construirMensage();
    if (msg.type === "TEXTO") {
        escreveMensagem(msg);
    }
    if ("tempoDoVideo" in msg) {
        rodarVideo(msg);
    }
}
exports.default = execute;
