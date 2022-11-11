
// mod nome: tipos = valor
// Tipando variaveis
let primitivos: null | undefined | boolean | string | number | object | any | unknown | never = null

// Tipando função
function soma(p1: number, p2: number): number {
  const resultado = p1 + p2
  return resultado
}

// Tipando função
let copySoma: (v1: number, v2: number) => void = soma

const resultado = copySoma(1, 2)

interface Nota {
  valor: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  materia: "portugues" | "matematica" | "geografia" | "ciencias" | "historia"
}

interface Entity {
  readonly __id: number
}

class Aluno implements Entity {
  readonly __id: number
  private __nome: string

  get nome() {
    return this.__nome
  }

  set nome(nome: string) {
    this.__nome = nome
  }

  constructor(id: number, nome: string, notas: Nota[]) {
    this.__id = id
    this.__nome = nome
  }
}

const notaDeOutroLugar = {
  valor: 6,
  materia: "matematica",
  ehRecuperacao: false
} as const

const notaDeMatematica: Nota = notaDeOutroLugar

const notasDoAluno: Nota[] = [notaDeMatematica]

const aluno: Aluno = new Aluno(2, "Vitor", notasDoAluno)

aluno.nome = "Carlos"

// aluno.__id = 10

console.log(aluno)