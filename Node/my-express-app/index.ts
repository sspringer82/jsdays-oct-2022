import express, { Request, Response } from 'express';
import usersRouter from './users';

const app = express();

app.use(express.json());

app.use('/users', usersRouter);

app.listen(8080, () => console.log('listening to http://localhost:8080'));
