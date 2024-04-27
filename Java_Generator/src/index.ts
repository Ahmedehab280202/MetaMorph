import express, { Request, Response } from "express";
import * as fs from 'fs-extra';

import ClassNode from "../node_modules/metamorph-lib/Backend Standardization TS/dist/models/ClassNode";
import DiagramNode from "../node_modules/metamorph-lib/Backend Standardization TS/dist/models/DiagramNode";
import ModelFile from "./models/ModelFile/ModelFile";
import ControllerFile from "./models/ControllerFile/ControllerFile";
import ServiceFile from "./models/ServiceFile/ServiceFile";
import RepositoryFile from "./models/RepositoryFile/RepositoryFile";
const app = express();
const port = 3006;
// Middleware to parse JSON requests
app.use(express.json());
app.post("/springboot", (req: Request, res: Response) => {
  const requestbody: DiagramNode = req.body;
  //const class_node: ClassNode = requestbody.class_nodes[0];
  const result = requestbody.class_nodes.map((class_node:ClassNode) => {
    return {
      "name":class_node.name,
      "model_file":new ModelFile(class_node).toString(),
      "controller_file":new ControllerFile(class_node).toString(),
      "service_file":new ServiceFile(class_node).toString(),
      "repository_file":new RepositoryFile(class_node).toString(),
    }
  });
  
  // //const classeslist:<ClassNode>;
  // const model_file: ModelFile = new ModelFile(class_node);
  // const controller_file: ControllerFile = new ControllerFile(class_node);
  // const service_file: ServiceFile = new ServiceFile(class_node);
  // const repository_file: RepositoryFile = new RepositoryFile(class_node);
  fs.removeSync('output')
  fs.mkdirSync('output')
  result.forEach(entity => {
    fs.mkdirSync(`output/${entity.name}`)
    fs.writeFileSync(`output/${entity.name}/${entity.name}.java`,entity.model_file)
    fs.writeFileSync(`output/${entity.name}/${entity.name}Controller.java`,entity.controller_file)
    fs.writeFileSync(`output/${entity.name}/${entity.name}Service.java`,entity.service_file)
    fs.writeFileSync(`output/${entity.name}/${entity.name}Repository.java`,entity.repository_file)
  })

  //output 
  res.send(result);
});

app.listen(port, () => {
  console.log(`Java Generator is running on port ${port}`);
});
