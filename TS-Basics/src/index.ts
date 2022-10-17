import add, { sub as abziehen } from './module';
import { login, logout } from './user/index';

const addResult = add(2, 2);
console.log(addResult);

const result = abziehen(4, 2);

console.log(result);

console.log(login);
