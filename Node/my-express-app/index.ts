import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

let users: User[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
  },
];

app.get('/users', (request: Request, response: Response): void => {
  response.json(users);
});

app.get('/users/:id', (request: Request, response: Response): void => {
  const id = parseInt(request.params.id);
  response.json(users.find((user) => user.id === id));
});

app.post('/users', (request: Request, response: Response) => {
  const id = Math.max(...users.map((user) => user.id)) + 1;
  const newUser = { ...request.body, id };
  users.push(newUser);
  response.json(newUser);
});

app.put('/users/:id', (request: Request, response: Response): void => {
  const updatedUser = request.body;
  const id = parseInt(request.params.id, 10);
  users = users.map((user) => {
    if (user.id === id) {
      return updatedUser;
    } else {
      return user;
    }
  });
  response.json(updatedUser);
});

app.delete('/users/:id', (request: Request, response: Response): void => {
  const id = parseInt(request.params.id);
  users = users.filter((user) => user.id !== id);
});

app.listen(8080, () => console.log('listening to http://localhost:8080'));
