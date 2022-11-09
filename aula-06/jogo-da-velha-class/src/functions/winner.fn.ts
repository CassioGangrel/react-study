export function winner(table) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let index = 0; index < lines.length; index++) {
    const [a, b, c] = lines[index]
    if (!!table[a] && table[a] === table[b] && table[a] === table[c]) {
      return table[a]
    }
  }
  return null
}