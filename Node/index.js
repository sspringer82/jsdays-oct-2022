import Module from './module.js';
import { createServer } from 'node:http';

console.log('Hallo Welt');

const m = new Module('klaus');
console.log(m);

createServer((req, res) => res.end('foo')).listen(8080, () =>
  console.log('listening')
);
