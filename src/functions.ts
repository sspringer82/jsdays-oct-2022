function add(a: number, b: number): number {
  return a + b;
}
const result = add(1, 2);
console.log(result);

const subtract = function (a: number, b: number): number {
  return a - b;
};
console.log(subtract(2, 1));

const divide = (a: number, b: number): number => {
  return a / b;
};
console.log(divide(9, 3));

type myFn = (a: number, b: number) => number;
const multiply: myFn = (a, b) => a * b;
console.log(multiply(2, 2));

//IIFE
(function () {
  console.log('xxx');
})();

function sayHello(name: string): void {
  console.log(`Hello ${name}`);
}
sayHello('Klaus');

console.log(add(2, 2));
// console.log(add(2)); // no
// console.log(add(1, 2, 3)); // no

function zuWenige(a: number, b?: number): number {
  return b ? a + b : a;
}
console.log(zuWenige(1, 2));
console.log(zuWenige(1));

function zuWenigeDefault(a: number, b: number = 42): number {
  return b ? a + b : a;
}
console.log(zuWenige(1, 2));
console.log(zuWenige(1));
console.log(zuWenigeDefault(1));

function zuViele(a: number, ...rest: number[]) {
  // console.log(arguments); // no!
  return [a, ...rest].reduce((prev, curr) => prev + curr, 0);
}
console.log(zuViele(1, 2, 3));
