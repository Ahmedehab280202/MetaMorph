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
  readonly entities: JavaSpringNode[]

  constructor(gen_path: string, front_code: HtmlCssNode, entity_nodes: JavaSpringNode[]) {
    this.name = 'MyGenApp'
    this.gen_path = gen_path
    this.pomFile = new PomFile()
    this.myAppFile = new MyAppFile(this.name)
    this.static_file = new StaticFile(front_code)
    this.template_file = new TemplateFile(front_code)
    this.entities = entity_nodes
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
    this.entities.forEach(entity => {
      this.mkdir(`${this.gen_path}/${this.name}/src/main/java/com/meta/${entity.name.toLowerCase()}`)
      this.writeFile(`${this.gen_path}/${this.name}/src/main/java/com/meta/${entity.name.toLowerCase()}/${entity.name}.java`,entity.model_file)
      this.writeFile(`${this.gen_path}/${this.name}/src/main/java/com/meta/${entity.name.toLowerCase()}/${entity.name}Controller.java`,entity.controller_file)
      this.writeFile(`${this.gen_path}/${this.name}/src/main/java/com/meta/${entity.name.toLowerCase()}/${entity.name}Service.java`,entity.service_file)
      this.writeFile(`${this.gen_path}/${this.name}/src/main/java/com/meta/${entity.name.toLowerCase()}/${entity.name}Repository.java`,entity.repository_file)
    })
    /* static */
    this.mkdir(`${this.gen_path}/${this.name}/src/main/resources`)
    this.writeFile(`${this.gen_path}/${this.name}/src/main/resources/application.properties`,`spring.application.name=${this.name}`)
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