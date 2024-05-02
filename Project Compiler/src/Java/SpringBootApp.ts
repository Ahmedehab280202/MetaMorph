import fs from 'fs';
import PomFile from './SpringBoot Files/PomFile';
import MyAppFile from './SpringBoot Files/MyAppFile';
import StaticFile from './SpringBoot Files/StaticFile';
import { HtmlCssNode, JavaSpringNode } from '../types';
import ControllerFile from './SpringBoot Files/ControllerFile';
import TemplateFile from './SpringBoot Files/TemplateFile';
import WebMvcConfigFile from './SpringBoot Files/WebMvcConfigFile';

export default class SpringBootApp {
  readonly name: string
  readonly gen_path: string
  readonly pomFile: PomFile
  readonly myAppFile: MyAppFile
  readonly webmvcconfig: WebMvcConfigFile
  readonly static_pages: StaticFile[]
  readonly entities: JavaSpringNode[]

  constructor(gen_path: string, htmlcss_nodes: HtmlCssNode[], entity_nodes: JavaSpringNode[]) {
    this.name = 'MyGenApp'
    this.gen_path = gen_path
    this.pomFile = new PomFile()
    this.myAppFile = new MyAppFile(this.name)
    this.webmvcconfig = new WebMvcConfigFile()
    this.static_pages = htmlcss_nodes.map(node => new StaticFile(node))
    this.entities = entity_nodes
    this.execute()
  }

  execute() {
    const base_path = `${this.gen_path}/${this.name}`
    this.rmdir(`${base_path}`)
    /* root */
    this.mkdir(`${base_path}`)
    this.writeFile(`${base_path}/${this.pomFile.file_name}`,this.pomFile.content)
    /* java */
    this.mkdir(`${base_path}/src`)
    this.mkdir(`${base_path}/src/main`)
    this.mkdir(`${base_path}/src/main/java`)
    this.mkdir(`${base_path}/src/main/java/com`)
    this.mkdir(`${base_path}/src/main/java/com/meta`)
    this.writeFile(`${base_path}/src/main/java/com/meta/${this.myAppFile.file_name}`,this.myAppFile.content)
    this.writeFile(`${base_path}/src/main/java/com/meta/${this.webmvcconfig.file_name}`,this.webmvcconfig.content)
    /* entities */
    this.entities.forEach(entity => {
      const entity_path = `${base_path}/src/main/java/com/meta/${entity.name.toLowerCase()}`
      this.mkdir(`${entity_path}`)
      this.writeFile(`${entity_path}/${entity.name}.java`,entity.model_file)
      if (entity.controller_file) this.writeFile(`${entity_path}/${entity.name}Controller.java`,entity.controller_file)
      if (entity.service_file)    this.writeFile(`${entity_path}/${entity.name}Service.java`,entity.service_file)
      if (entity.repository_file) this.writeFile(`${entity_path}/${entity.name}Repository.java`,entity.repository_file)
    })
    /* static */
    this.mkdir(`${base_path}/src/main/resources`)
    this.writeFile(`${base_path}/src/main/resources/application.properties`,`spring.application.name=${this.name}`)
    this.mkdir(`${base_path}/src/main/resources/static`)
    this.static_pages.forEach(page => {
      console.log(page.file_name);
      this.writeFile(`${base_path}/src/main/resources/static/${page.file_name}`,page.content)
    })
    this.mkdir(`${base_path}/src/main/resources/templates`)
  }

  mkdir(dir_path: string) {
    console.log(dir_path);
    try {
      fs.mkdirSync(dir_path);
      console.log('Folder created successfully:' + dir_path);
    } catch (err) {
      console.error('Error creating folder:' + dir_path, err);
    }
  }
  writeFile(file_path: string, file_content: string) {
    try {
      fs.writeFileSync(file_path,file_content);
      console.log('Folder created successfully:' + file_path);
    } catch (err) {
      console.error('Error creating folder:' + file_path, err);
    }
  }
  rmdir(dir_path: string) {
    if (fs.existsSync(dir_path)) {
      try {
        fs.rmSync(dir_path, { recursive: true });
        console.log('Folder removed successfully:' + dir_path);
      } catch (err) {
        console.error('Error removing folder:' + dir_path, err);
      }
    }
  }

}