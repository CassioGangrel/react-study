Array.prototype.meuFind = find; // exemplo
Array.prototype.meuMap = map;
Array.prototype.meuFilter = filter;
Array.prototype.meuForEach = forEach;
Array.prototype.meuReduce = reduce;

const validateFn = (callback) => {
  if (typeof callback != "function") {
    throw new Error("Callback precisa ser uma função");
  }
};

function find(callback, thisArg) {
  validateFn(callback);
  for (let i = 0; i < this.length; i++) {
    const value = this[i];
    const callbackResult = callback.apply(thisArg, [value, i, this]);
    if (callbackResult) {
      return value;
    }
  }
}

function map(callback, thisArg) {
  validateFn(callback);

  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    const newItem = callback.apply(thisArg, [item, i, this]);
    newArray.push(newItem);
  }

  return newArray;
}

function filter(callback, thisArg) {
  validateFn(callback);

  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    const trueOrFalse = callback.apply(thisArg, [item, i, this]);
    if (trueOrFalse) {
      newArray.push(item);
    }
  }

  return newArray;
}

function forEach(callback, thisArg) {
  validateFn(callback);
  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    callback.apply(thisArg, [item, i, this]);
  }
}

function reduce(callback, initialValue, thisArg) {
  validateFn(callback);

  let returnValue = initialValue;

  for (let i = 0; i < this.length; i++) {
    const acc = returnValue ? returnValue : this[i];
    const next = initialValue ? this[i] : this[i + 1];

    if (!next) break;

    returnValue = callback.apply(thisArg, [acc, next, i, this]);
  }

  return returnValue;
}

export {};
