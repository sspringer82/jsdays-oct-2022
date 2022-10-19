import { Router, Request, Response } from 'express';
import User from './user';

const usersRouter = Router();

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

usersRouter.get('/', (request: Request, response: Response): void => {
  response.json(users);
});

usersRouter.get('/:id', (request: Request, response: Response): void => {
  const id = parseInt(request.params.id);
  response.json(users.find((user) => user.id === id));
});

usersRouter.post('/', (request: Request, response: Response) => {
  const id = Math.max(...users.map((user) => user.id)) + 1;
  const newUser = { ...request.body, id };
  users.push(newUser);
  response.json(newUser);
});

usersRouter.put('/:id', (request: Request, response: Response): void => {
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

usersRouter.delete('/:id', (request: Request, response: Response): void => {
  const id = parseInt(request.params.id);
  users = users.filter((user) => user.id !== id);
});

export default usersRouter;
