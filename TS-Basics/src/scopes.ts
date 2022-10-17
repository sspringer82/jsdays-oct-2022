// --- block ---
{
  const block = 'bar';
}
// console.log(block); // no

// --- function ---
function fn() {
  const functionVar = 'bar';
}
// console.log(functionVar) // no

// --- module ---
const moduleScope = 'hallo'; // in der gesamten datei

// --- global ---
// client
// window.myGlobal = 'foo';
// node
// global.myGlobal = 'bar';

function aussen() {
  let value = 'asdf';
  return {
    getter() {
      return value;
    },
    setter(v: string) {
      value = v;
    },
  };
}
const { getter, setter } = aussen();
console.log(getter());
setter('xxx');
console.log(getter());
