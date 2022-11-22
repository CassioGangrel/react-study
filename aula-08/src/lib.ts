export interface Pessoa {
  endereco: string
}

export class Pessoa {
  name: string
  idade: number

  constructor(name: string, idade: number) {
    this.idade = idade
    this.name = name
  }
}