import express, { Request, Response } from 'express';
import fs from 'fs';
import * as fs_extra from 'fs-extra';
import archiver from 'archiver';
import path from 'path';
import cors from 'cors';
import { Octokit } from "octokit";
import { execSync } from 'child_process';
import multer from 'multer';
import bodyParser from 'body-parser';
import csvParser from 'csv-parser';

import SpringBootApp from './Java/SpringBootApp';
import MetaProject from './MetaProject';
import { HtmlCssNode } from './types';

const port = 3002;
const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

app.post('/project/code', async (req: Request, res: Response) => {
  const meta_ui_data=  await MetaProject.getMetaUiData(req.body.raw_ui_data)
  const html_css_code= await MetaProject.getHtmlCssCode(meta_ui_data)

  const meta_uml_data = await MetaProject.getMetaUmlData(req.body.raw_uml_data)
  const java_code= await MetaProject.getJavaCode(meta_uml_data)

  const response_body = {
    "html_css_code": html_css_code,
    "java_code": java_code
  }
  res.send(response_body)
})

app.post('/project/zip', async (req: Request, res: Response) => {
  const spring_app = new SpringBootApp(__dirname,req.body.html_css_code, req.body.java_code)

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

  /* res.send('/project/zip') */
})

app.post('/project/github', async (req: Request, res: Response) => {
  const spring_app = new SpringBootApp(__dirname,req.body.html_css_code, req.body.java_code)

  const octokit = new Octokit({ auth: req.body.access_token });

  async function createRepository(repoName: string): Promise<void> {
    await octokit.request("POST /user/repos", {
        name: repoName,
        private: false, // Set to true for a private repository
    });
  }

  async function pushToRepository(repoName: string): Promise<void> {
    const repoOwner = req.body.repo_owner; // Assuming you have a way to get the repo owner
    const directoryPath = `${__dirname}/MyGenApp`; // Path to the directory you want to push

    // Clone the newly created repository to a local directory
    execSync(`git clone https://github.com/${repoOwner}/${repoName}.git`);

    // Change directory to the cloned repository
    process.chdir(repoName);

    // Copy files/directories to the local repository
    // Example using fs-extra to copy directory contents
    fs_extra.copySync(directoryPath, process.cwd());

    // Add, commit, and push changes to the remote repository
    execSync("git add .");
    execSync(`git commit -m "MetaMorph Init"`);
    execSync("git push origin master");
  }

  await createRepository(req.body.repo_name)
    .then(() => {
        console.log("Repository created successfully");

        // Push files/directories to the repository
        pushToRepository(req.body.repo_name)
          .then(() => {
              console.log("Files/directories pushed successfully");
          })
          .catch((err) => {
              console.error("Error pushing files/directories:", err);
          });
    })
    .catch((err) => {
        console.error("Error creating repository:", err);
    });

  res.send('/project/github');
});


/* app.post('/', upload.single('raw_uml_data'), async (req: Request, res: Response) => {
  if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
  }

  const raw_ui_data= JSON.parse(req.body.raw_ui_data)
  const raw_uml_data= await MetaProject.parseCsv(req.file.path)
  const meta_ui_data= await MetaProject.getMetaUiData(raw_ui_data)
  const meta_uml_data= await MetaProject.getMetaUmlData(raw_uml_data)
  const html_code= await MetaProject.getHtmlCode(meta_ui_data)
  const css_code= await MetaProject.getCssCode(meta_ui_data)
  const java_code= await MetaProject.getJavaCode(meta_uml_data)

  const meta_project = new MetaProject(
    raw_ui_data,
    raw_uml_data,
    meta_ui_data,
    meta_uml_data,
    html_code,
    css_code,
    java_code,
  )


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
}); */

app.get('/figma-api',upload.none(), async (req:Request, res:Response) => {
  const figma_token = req.body['X-Figma-Token']
  const file_url = req.body['file_url']

  const raw_ui_data = await MetaProject.getRawUiData(file_url, figma_token)
  res.send(raw_ui_data)
})

/* app.get('/debug/backend',async (req:Request, res:Response) => {
  const raw_uml_data = req.body
  const meta_uml_data = await MetaProject.getMetaUmlData(raw_uml_data)
  const java_code = await MetaProject.getJavaCode(meta_uml_data)

  const demo_html_css: HtmlCssNode = {
    'html': '',
    'css': ''
  }
  const spring_app = new SpringBootApp(__dirname, demo_html_css, java_code)
  spring_app.execute()

  res.send(java_code)
}) */

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
  console.log(`Project Compiler running at http://localhost:${port}`);
});
