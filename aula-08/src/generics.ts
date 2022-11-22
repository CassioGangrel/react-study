const executaSql = <R = any> (source: string) => source as unknown as R

type Aluno = {
  nome: string
}

const number = executaSql<Aluno>("select nome from aluno wher.....")