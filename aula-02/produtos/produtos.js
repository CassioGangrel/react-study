import { produtoParaListItemElement, toTodo } from './fn.js'

const todos = await fetch('https://jsonplaceholder.typicode.com/todos')
  .then(resposta => resposta.json())
  .then(todos => !!todos ? todos : [] )
  .catch(console.error)
  .finally(() => console.log("Todos carregados!"))

const container = globalThis["lista-todos"]

const divsDosProdutos = todos.map(toTodo).map(produtoParaListItemElement)

divsDosProdutos.forEach(div => container.appendChild(div))

