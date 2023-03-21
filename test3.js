// x ^ 2 - 4 * y ^ 2 = n

const firstEquation = (x, y) => x - 2 * y;
const secondEquation = (x, y) => x + 2 * y;

function solve(n) {
  console.log(`x ^ 2 - 4 * y ^ 2 = ${n}`);
  const result = [];

  const validate = (x) => x >= 0 && x % 1 === 0;

  const addResult = (x, y) => {
    if (validate(x) && validate(y)) result.push([x, y]);
  };

  for (let nn = 0; n >= nn; nn++) {
    const s1 = nn;
    const s2 = n / nn;
    if (s2 % 1 !== 0) continue;
    // x - 2 * y = s1
    // x + 2 * y = s2
    // ------
    //! y = (s2 - s1) / 4; x = 0.5s2 - 0.5s1
    addResult(s1 + 0.5 * (s2 - s1), (s2 - s1) / 4);
  }
  return result;
}

console.log(solve(5)); // [[3, 1]] (x^2 - 4 * y^2 = 5; x=3; y=1)
console.log(solve(12)); // [[4, 1]]
console.log(solve(13)); // [[7, 3]]
console.log(solve(16)); // [[4, 0]]
console.log(solve(90005)); // [[45003, 22501], [9003, 4499], [981, 467], [309, 37]]
console.log(solve(90002)); // []
