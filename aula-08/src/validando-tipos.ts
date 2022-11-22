type Cor = "vermelho" | "azul" | "verde";

interface Veiculo {
  portas: number;
  cor: Cor;
  rodas: number;
}

type Veiculo2Portas = {
  portas: 2;
} & Veiculo;

function isVeiculo2Portas(veiculo: Veiculo): veiculo is Veiculo2Portas {
  if (veiculo.portas === 2) return true;
  return false;
}

interface Veiculo4Portas extends Veiculo {
  portas: 4;
}

function isVeiculo4Portas(veiculo: Veiculo): veiculo is Veiculo4Portas {
  if (veiculo.portas === 4) return true;
  return false;
}

function novoVeiculo(portas: number, cor: Cor, rodas: number): Veiculo {
  return {
    cor,
    portas,
    rodas,
  };
}

function entregarVeiculo2Portas(veiculo: Veiculo2Portas) {
  console.log("Veiculo 2 portas entrege", veiculo);
}

function entregarVeiculo4Portas(veiculo: Veiculo4Portas) {
  console.log("Veiculo 4 portas entrege", veiculo);
}

type Key = "IMAGEM" | "VIDEO" | "TEXTO";

type MensagemDeTexto = {
  conteudo: string;
  type: "TEXTO";
  comprimentoDoText: number;
};

type MensagemDeVideo = {
  conteudo: string;
  type: "VIDEO";
  tempoDoVideo: number;
};

type MensagemDeImagem = {
  conteudo: string;
  type: "IMAGEM";
  tamanhoDaImagem: number;
};

type Mensagem = MensagemDeImagem | MensagemDeVideo | MensagemDeTexto;

function construirMensage(): Mensagem {
  const textMessage: MensagemDeTexto = {
    conteudo: "Sou um texto",
    type: "TEXTO",
    comprimentoDoText: 12,
  };
  return textMessage;
}

function escreveMensagem(msg: MensagemDeTexto) {
  console.log(msg.conteudo);
}

function rodarVideo(msg: MensagemDeVideo) {
  console.log(msg.conteudo);
}

export default function execute() {
  const veiculo2Portas = novoVeiculo(2, "verde", 4);
  const veiculo4Portas = novoVeiculo(4, "vermelho", 4);

  if (!isVeiculo2Portas(veiculo2Portas)) return;
  if (!isVeiculo4Portas(veiculo4Portas)) return;

  entregarVeiculo2Portas(veiculo2Portas);
  entregarVeiculo4Portas(veiculo4Portas);

  const msg: Mensagem = construirMensage();

  if (msg.type === "TEXTO") {
    escreveMensagem(msg);
  }

  if ("tempoDoVideo" in msg) {
    rodarVideo(msg);
  }
}
