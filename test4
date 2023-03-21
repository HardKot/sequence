const add = (x, y) => x + y;

const double = (x) => add(x, x);

const sequence = (funcs, result) => ({
  calculate() {
    return result;
  },
  ...Object.fromEntries(
    Object.entries(funcs).map(([key, func]) => [
      key,
      (...args) =>
        sequence(
          funcs,
          result !== undefined ? func(result, ...args) : func(...args)
        ),
    ])
  ),
});

let s = sequence({ add, double });
console.log(s.add(3, 4).calculate() === 7);

console.log(s.add(1, 2).calculate() === 3);

let s1 = s.add(1, 2);
console.log(s1.calculate() === 3);

console.log(s1.double().calculate() === 6);
console.log(s1.add(1).calculate() === 4);
console.log(s1.calculate() === 3);

let s2 = s1.add(5);
console.log(s2.double().calculate() === 16);
console.log(s2.add(3).calculate() === 11);
console.log(s2.calculate() === 8);

console.log(s1.calculate() === 3);
