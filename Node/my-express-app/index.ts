import express from 'express';
import logger from './logger';
import usersRouter from './users';

const app = express();

app.use(express.json());

app.use(logger);

app.use('/users', usersRouter);

app.listen(8080, () => console.log('listening to http://localhost:8080'));
