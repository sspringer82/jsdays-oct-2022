import Module from './module.js';
import { createServer } from 'node:http';

console.log('Hallo Welt');

const m = new Module('klaus');
console.log(m);

createServer((req, res) => {
  let chunks = '';
  req.on('data', () => {
    chunks += req.read();
  });

  req.on('end', () => {});

  res.write('eins');
  res.write('zwei');
  res.write('drei');
  res.write('vier');
  res.end('foo');
}).listen(8080, () => console.log('listening'));
