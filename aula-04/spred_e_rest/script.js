// rest e spred

const frutas = ['maça', 'banana', 'goiaba']

// desestrutura um array
const [ a, b, c] = frutas

console.log(a, b, c)
console.log(frutas)


const usuario = {
  nome: "Carlos",
  isAdmin: true,
  createdAt: new Date()
}

// desestrutura um Objeto
const { isAdmin, ...batata } = usuario

console.log(usuario)
console.log(batata.nome, batata.createdAt.toLocaleDateString(), isAdmin)

function sum(...numbers) {
  return numbers.reduce((n1, n2) => n1 + n2)
}

[]

const arrayNumeros = new Array(100).fill(Math.ceil(Math.random() * 100))

console.log(sum(...arrayNumeros))

const outroUsuario = { ...usuario, isAdmin: false, id: 981239 }


console.log(outroUsuario, outroUsuario === usuario)