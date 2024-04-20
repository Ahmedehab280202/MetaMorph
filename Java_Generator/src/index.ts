import express, { Request, Response } from "express";
import ClassNode from "../node_modules/metamorph-lib/Backend Standardization TS/dist/models/ClassNode";
import ModelFile from "./models/ModelFile/ModelFile";
import ControllerFile from "./models/ControllerFile/ControllerFile";
import ServiceFile from "./models/ServiceFile/ServiceFile";
import RepositoryFile from "./models/RepositoryFile/RepositoryFile";
const app = express();
const port = 3000;
// Middleware to parse JSON requests
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  const requestbody: any = req.body;
  const class_node: ClassNode = requestbody.class_nodes[0];
  const model_file: ModelFile = new ModelFile(class_node);
  const controller_file: ControllerFile = new ControllerFile(class_node);
  const service_file: ServiceFile = new ServiceFile(class_node);
  const repository_file: RepositoryFile = new RepositoryFile(class_node);

  //output 
  res.send({
    "controller": controller_file.toString(),
    "model": model_file.toString(),
    "service": service_file.toString(),
    "repository": repository_file.toString()
  });


});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
