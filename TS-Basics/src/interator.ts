class Counter implements Iterable<number> {
  #value: number = 0;

  [Symbol.iterator]() {
    return {
      next: () => {
        return {
          done: this.#value === 10,
          value: this.#value++,
        };
      },
    };
  }
}

const counter = new Counter();
for (const v of counter) {
  console.log(v);
}

// --- generator ---
function* generator() {
  let value = 0;
  while (value < 10) {
    yield value++;
  }
}
const gen = generator();
console.log(gen.next().value);
console.log(gen.next().value);

for (const value of generator()) {
  console.log(value);
}
