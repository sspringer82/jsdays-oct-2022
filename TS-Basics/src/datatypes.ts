const nullvalue: null = null; // kein Wert - deiner
const undefinedValue = undefined; // kein Wert - der Engine seiner - keine Zuweisung

const booleanValue: boolean = true;

const numberValue: number = 42;
const numberValue2: number = 42.42;
const numberValue3: number = 42e7;
const numberValue4: number = 0o4; // oktal
const numberValue5: number = 0xabc; // hex

const bigNumber: bigint = 42n;
const bigNumber2: bigint = BigInt(42);

const s1 = 'a"';
const s2 = "a'";
const s3 = `a${s1}
next line`; // template string
const sResult = 'Hallo Welt'.split(' ');

const sym = Symbol('myFoo');
const o = {
  [sym]: 'foo',
};
console.log(o[sym]);

const foo: any = 'bar'; // https://www.typescriptlang.org/tsconfig#noImplicitAny https://typescript-eslint.io/rules/no-explicit-any/
const bar: unknown = 'foo';

const x: void; // keine Rückgabe
const y: never; // keine Rückgabe

const o = {
  name: 'Klaus',
};

const arr = [1, 2, '3'];
const nArray: Array<number | string | boolean> = [];
const n2Array: number[] = [];

const s4 = 'foo';

nArray.push(42);
