const person = {
  name: 'Klaus',
  age: 42,
};

for (const i in person) {
  console.log(i);
}

// for (const value of person) {
//   console.log(value);
// }

const a = [7, 8, 9];
for (const key in a) {
  console.log(key);
}
for (const value of a) {
  console.log(value);
}
myFor: for (;;) {
  break myFor;
}
