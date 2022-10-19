import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response): void => {
  res.json({ id: 1, name: 'Klaus' });
});

app.listen(8080);
