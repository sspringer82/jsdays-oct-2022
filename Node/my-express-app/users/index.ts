import { Router, Request, Response } from 'express';
import controller from './controller';

const usersRouter = Router();

usersRouter.get('/', controller.getAll);

usersRouter.get('/:id', controller.getOne);

/*usersRouter.post('/', controller.create);

usersRouter.put('/:id', controller.update);

usersRouter.delete('/:id', controller.remove);*/

export default usersRouter;
