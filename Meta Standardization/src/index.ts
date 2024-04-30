
import express from 'express';
import { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import FigmaFactory from './factories/FigmaFactory';

const app = express();
const port = 3003;

/* app.use(express.json()); */
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send(JSON.stringify('Hello from Meta')); 
});

app.post('/figma', (req: Request, res: Response) => {
  const nodes: [] = req.body
  const response= nodes.map(node => FigmaFactory.NodeConstructor(node))
  res.send(response); 
});

app.listen(port, () => {
  console.log(`Meta Standardization is listening on port ${port}`);
});
