import * as n from "./script.js";

{
  /** Teste do meu Find
   * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find#par%C3%A2metros
   */
  const array = [5, 8, 130, 12, 44];
  const found = array.meuFind((element) => element > 10);
  console.log(found);
  // expected output: 12
}

{
  /** Teste do meu Map
   * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map*/
  const array = [1, 2, 3, 4, 5];
  const double = array.meuMap((n) => n * 2);
  console.log(double);
  // expected output: [2, 4 , 6 , 8 ,10]
}

{
  /** Teste do meu Filter
   * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   */
  const array = [1, 2, 3, 4, 5];
  const odd = array.meuFilter((n) => n % 2 != 0);
  console.log(odd);
  // expected output: [1, 3 , 5]
}

{
  /** Teste do meu ForEach
   * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
   */
  const array = [1, 2, 3, 4, 5];
  array.meuForEach((n) => console.log("fe", n));
  // expected output: fe 1
  // fe 2
  // fe 3
  // fe 4
  // fe 5
}

{
  /** Teste do meu Reduce
   * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
   */
  const array = [1, 2, 3, 4, 5];
  const sum = array.meuReduce((acc, next) => acc + next);
  console.log(sum);
  // expected output: 15

  // reduce as filter
  const even = array.meuReduce((acc, next) => {
    if (next % 2 === 0) acc.push(next)
    return acc
  }, [])
  console.log(even)
  // expected output: [2, 4]
}
