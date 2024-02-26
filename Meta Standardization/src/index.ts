
import express from 'express';
import { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import FigmaFactory from './factories/FigmaFactory';

const app = express();
const port = 3000;

/* app.use(express.json()); */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send(JSON.stringify('Hello from Meta')); 
});

app.post('/figma', (req: Request, res: Response) => {
  const node = req.body
  res.send(FigmaFactory.NodeConstructor(node)); 
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
