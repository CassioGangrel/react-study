import { Todo } from './types.js'

export function produtoParaListItemElement(todo) {
  const li = document.createElement("li");
  const strong = document.createElement("strong");

  li.innerText = todo.title + ": ";

  strong.innerText = todo.completed;

  li.appendChild(strong);

  li.onclick = (evento) => (evento.target.style = "color: red;");

  return li;
}

export const toTodo = any => new Todo(any.title, any.completed)

