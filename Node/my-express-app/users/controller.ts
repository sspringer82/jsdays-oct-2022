import { Request, Response } from 'express';
import model from './model';

import User from './user';

const controller = {
  async getAll(request: Request, response: Response): Promise<void> {
    const users = await model.getAll();
    response.json(users);
  },
  async getOne(request: Request, response: Response): Promise<void> {
    const id = parseInt(request.params.id);
    const user = await model.getOne(id);
    response.json(user);
  },
  /*create(request: Request, response: Response) {
    const id = Math.max(...users.map((user) => user.id)) + 1;
    const newUser = { ...request.body, id };
    users.push(newUser);
    response.json(newUser);
  },
  update(request: Request, response: Response): void {
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
  },
  remove(request: Request, response: Response): void {
    const id = parseInt(request.params.id);
    users = users.filter((user) => user.id !== id);
  },*/
};

export default controller;
