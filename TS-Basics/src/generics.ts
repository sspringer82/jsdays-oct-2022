const nArray: Array<number> = [1, 2, 3];

console.log(nArray);

class Collection<T> {
  constructor(private items: T[] = []) {}

  addItem(item: T): void {
    this.items.push(item);
  }

  getItem(key: number): T {
    return this.items[key];
  }
}

interface User {
  id: number;
  name: string;
}

const collection = new Collection<User>([{ id: 1, name: 'klaus' }]);
collection.addItem({ id: 2, name: 'Petra' });
console.log(collection.getItem(1));

const sCollection = new Collection<strin>(['a', 'b']);

function doSomethingAsync(): Promise<string> {
  return Promise.resolve('ofoo');
}

function greet<T extends { name: string; toString: () => string }>(
  greeting: string,
  what: T
): void {
  console.log(`${greeting} ${what.toString()}`);
}

greet('Hallo', {
  name: 'klaus',
  toString() {
    return this.name;
  },
});
