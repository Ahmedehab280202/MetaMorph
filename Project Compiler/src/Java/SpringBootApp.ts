import fs from 'fs';
import PomFile from './SpringBoot Files/PomFile';
import MyAppFile from './SpringBoot Files/MyAppFile';
import StaticFile from './SpringBoot Files/StaticFile';
import { HtmlCssNode, JavaSpringNode } from '../types';
import ControllerFile from './SpringBoot Files/ControllerFile';
import TemplateFile from './SpringBoot Files/TemplateFile';

export default class SpringBootApp {
  readonly name: string
  readonly gen_path: string
  readonly pomFile: PomFile
  readonly myAppFile: MyAppFile
  readonly template_file: TemplateFile
  readonly static_file: StaticFile
  readonly controllerFile: string
  readonly serviceFile: string
  readonly modelFile: string
  readonly repoFile: string

  constructor(gen_path: string, front_code: HtmlCssNode, back_code: JavaSpringNode) {
    this.name = 'MyGenApp'
    this.gen_path = gen_path
    this.pomFile = new PomFile()
    this.myAppFile = new MyAppFile(this.name)
    this.static_file = new StaticFile(front_code)
    this.template_file = new TemplateFile(front_code)
    this.controllerFile = back_code.controller
    this.serviceFile = back_code.service
    this.modelFile = back_code.model
    this.repoFile = back_code.repository
  }

  execute() {
    /* root */
    this.mkdir(`${this.gen_path}/${this.name}`)
    this.writeFile(`${this.gen_path}/${this.name}/${this.pomFile.file_name}`,this.pomFile.content)
    /* java */
    this.mkdir(`${this.gen_path}/${this.name}/src`)
    this.mkdir(`${this.gen_path}/${this.name}/src/main`)
    this.mkdir(`${this.gen_path}/${this.name}/src/main/java`)
    this.mkdir(`${this.gen_path}/${this.name}/src/main/java/com`)
    this.mkdir(`${this.gen_path}/${this.name}/src/main/java/com/meta`)
    this.writeFile(`${this.gen_path}/${this.name}/src/main/java/com/meta/${this.myAppFile.file_name}`,this.myAppFile.content)
    this.mkdir(`${this.gen_path}/${this.name}/src/main/java/com/meta/controller`)
    this.writeFile(`${this.gen_path}/${this.name}/src/main/java/com/meta/controller/TaskController.java`,this.controllerFile)
    this.mkdir(`${this.gen_path}/${this.name}/src/main/java/com/meta/service`)
    this.writeFile(`${this.gen_path}/${this.name}/src/main/java/com/meta/service/TaskService.java`,this.serviceFile)
    this.mkdir(`${this.gen_path}/${this.name}/src/main/java/com/meta/repository`)
    this.writeFile(`${this.gen_path}/${this.name}/src/main/java/com/meta/repository/TaskRepository.java`,this.repoFile)
    this.mkdir(`${this.gen_path}/${this.name}/src/main/java/com/meta/model`)
    this.writeFile(`${this.gen_path}/${this.name}/src/main/java/com/meta/model/Task.java`,this.modelFile)
    /* static */
    this.mkdir(`${this.gen_path}/${this.name}/src/main/resources`)
    this.mkdir(`${this.gen_path}/${this.name}/src/main/resources/static`)
    this.writeFile(`${this.gen_path}/${this.name}/src/main/resources/static/${this.static_file.file_name}`,this.static_file.content)
    this.mkdir(`${this.gen_path}/${this.name}/src/main/resources/templates`)
  }

  mkdir(dir_path: string) {
    console.log(dir_path);
    try {
      fs.mkdirSync(dir_path);
      console.log('Folder created successfully:' + dir_path);
    } catch (err) {
      console.error('Error creating folder:' + dir_path, err);
    }
  
    /* fs.mkdirSync(dir_path, (err) => {
      if (err) {
        console.error('Error creating folder:'+ dir_path, err);
        return;
      }
      console.log('Folder created successfully:'+ dir_path);
    }); */
  }

  writeFile(file_path: string, file_content: string) {
    try {
      fs.writeFileSync(file_path,file_content);
      console.log('Folder created successfully:' + file_path);
    } catch (err) {
      console.error('Error creating folder:' + file_path, err);
    }

    /* fs.writeFile(file_path, file_content, (err) => {
      if (err) {
        console.error('Error creating file:' + file_path, err);
        return;
      }
      console.log('File created successfully:' + file_path);
    }); */
  }
}