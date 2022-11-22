import { Pessoa } from "./lib";

declare module "./lib" {
  export interface Pessoa {
    email: string;
  }
}

export default function execute() {
  const pessoa = new Pessoa("Mauricio", 34);

  pessoa.email = "emial@mail.com";
  pessoa.endereco = "R. nothing";

  console.log(pessoa);
}
