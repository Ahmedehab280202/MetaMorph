import express, { Request, Response } from 'express';
import cors from 'cors';
import csvParser from 'csv-parser';
import fs from 'fs';
import multer, { MulterError } from 'multer';
import { LucidCsv } from './types';
import DiagramNode from './models/DiagramNode';

const app = express();
const PORT = 3004;

app.use(cors());
const upload = multer({ dest: 'uploads/' });
app.use(express.json()); 

app.post('/name', upload.none(), (req: Request, res: Response) => {
    res.send(req.body.name)
  });

app.post('/upload_csv', upload.single('csv'), (req: Request, res: Response) => {
  if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
  }

  const filePath = req.file.path;

  const results: LucidCsv[] = [];
  fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (data) => results.push(data))
      .on('end', () => {
          // Delete the uploaded file after parsing
          fs.unlinkSync(filePath);
          res.json(results);
      });
});

app.post('/lucid/convert', upload.single('csv'), (req: Request, res: Response) => {
  if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
  }

  const filePath = req.file.path;

  const results: LucidCsv[] = [];
  fs.createReadStream(filePath)
    .pipe(csvParser())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        // Delete the uploaded file after parsing
        fs.unlinkSync(filePath);
        res.json(new DiagramNode(results));
    });
});

app.post('/lucid', (req: Request, res: Response) => {
    res.send(new DiagramNode(req.body))
});

app.listen(PORT, () => {
  console.log(`Backend Standardization is running on port ${PORT}`);
});