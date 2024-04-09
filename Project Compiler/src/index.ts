import express, { Request, Response } from 'express';
import fs from 'fs';
import SpringBootApp from './Java/SpringBootApp';
import { HtmlCssNode } from './types';
import archiver from 'archiver';
import path from 'path';
import cors from 'cors';


const app = express();
const port = 3002;
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send(req.body);
});

/* app.get('/generate', (req: Request, res: Response) => {
  const body: HtmlCssNode = req.body
  const springApp = new SpringBootApp('./gen', body)
  springApp.execute()
}); */

/* app.post('/todo', (req: Request, res: Response) => {
  console.log(req.body);
  const springApp = new SpringBootApp('./gen', req.body)
  springApp.execute()
}) */

app.post('/download', async (req: Request, res: Response) => {

  console.log(req.body);

  const springApp = new SpringBootApp(__dirname, req.body.html_css_code, req.body.java_code[0])
  springApp.execute()

  const folderName = 'MyGenApp';
  const dirPath = path.join('./src', folderName);

  const outputZip = 'src/MyGenApp.zip';
  const output = fs.createWriteStream(outputZip);
  const archive = archiver('zip', {
    zlib: { level: 9 } // Set compression level to maximum
  });


  archive.pipe(output);
  archive.directory(dirPath, folderName);
  await archive.finalize();


  // Listen for 'close' event on the output stream 
  output.on('close', () => {
    console.log('Zip file created successfully.');

    // Set the content type and attachment header
    res.set('Content-Type', 'application/zip');
    res.set('Content-Disposition', `attachment; filename=MyGenApp.zip`);

    // Send the zip file as the response
    res.sendFile('MyGenApp.zip', { root: __dirname }, (err) => {
      if (err) {
        console.error('Error sending file:', err);
        res.status(500).end();
      } else {
        console.log('File sent successfully.');
        // Delete the zip file after sending
        fs.unlink(outputZip, (err) => {
          if (err) {
            console.error('Error deleting file:', err);
          } else {
            console.log('File deleted successfully.');
          }
        });
      }
    });
  });

  // Listen for 'error' event on the archive
  archive.on('error', (err) => {
    console.error('Error creating zip file:', err);
    res.status(500).end();
  });
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
