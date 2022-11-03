const input = window.input
const button = window["say-hello"]

function onClick() {
  const value = input.value
  alert("Hello " + value)
}

button.addEventListener("click", onClick)