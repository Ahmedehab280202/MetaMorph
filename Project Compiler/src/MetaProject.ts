import axios from 'axios';
import fs from 'fs';
import csvParser from 'csv-parser';
import SpringBootApp from './Java/SpringBootApp';
import { JavaSpringNode } from './types';

export default class MetaProject {
  public readonly raw_ui_data: Object
  public readonly raw_uml_data: Object
  public readonly meta_ui_data: Object
  public readonly meta_uml_data: Object
  public readonly html_code: string
  public readonly css_code: string
  public readonly java_code: JavaSpringNode[]
  /* public readonly springboot_app: SpringBootApp */

  constructor(
    raw_ui_data: Object,
    raw_uml_data: Object,
    meta_ui_data: Object,
    meta_uml_data: Object,
    html_code: string,
    css_code: string,
    java_code: JavaSpringNode[]
  ){
    this.raw_ui_data= raw_ui_data
    this.raw_uml_data= raw_uml_data
    this.meta_ui_data= meta_ui_data
    this.meta_uml_data= meta_uml_data
    this.html_code= html_code
    this.css_code= css_code
    this.java_code= java_code
    /* this.springboot_app= new SpringBootApp(
      __dirname, 
      { 
        "html" : this.html_code, 
        "css" : this.css_code 
      }, 
      { 
        "model" : this.java_code[0].model, 
        "service" : this.java_code[0].service, 
        "controller": this.java_code[0].controller, 
        "repository": this.java_code[0].repository, 
      },
    )
    this.springboot_app.execute() */
  }

  static async getRawUiData(file_url: string, figma_token: string) {
    const match = file_url.match(/\/file\/([^\/?]+)/);
    const file_key = match ? match[1] : null

    const url = `https://api.figma.com/v1/files/${file_key}`;
    const headers = {
        'X-Figma-Token': figma_token,
    };

    try {
      const response = await axios.get(url, { headers });
      const raw_ui_data = response.data["document"]["children"].find((node: any) => node["type"] == "CANVAS")["children"]
      return raw_ui_data;
    } catch (error) {
        console.error('Error:', error);
    }
  }

  static async getMetaUiData(raw_ui_data: Object) {
    try {
      const response = await axios.post('http://localhost:3003/figma',raw_ui_data);
      return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
  }

  static async getMetaUmlData(raw_uml_data: Object) {
    try {
      const response = await axios.post('http://localhost:3004/lucid',raw_uml_data);
      return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
  }

  static async getHtmlCode(meta_ui_data: Object) {
    try {
      const response = await axios.post('http://localhost:3005/html',meta_ui_data);
      return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
  }

  static async getCssCode(meta_ui_data: Object) {
    try {
      const response = await axios.post('http://localhost:3005/css',meta_ui_data);
      return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
  }

  static async getJavaCode(meta_uml_data: Object) {
    try {
      const response = await axios.post('http://127.0.0.1:3006/springboot',meta_uml_data);
      return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
  }

  static async parseCsv(file_path: string): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      const filePath = file_path;
      const raw_uml_data: any[] = [];
      fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', (data) => raw_uml_data.push(data))
        .on('end', () => {
          // Delete the uploaded file after parsing
          fs.unlinkSync(filePath);
          resolve(raw_uml_data);
        })
        .on('error', (error) => reject(error));
    });
  }  
}

