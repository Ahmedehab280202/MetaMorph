import axios from 'axios';
import fs from 'fs';
import csvParser from 'csv-parser';
import SpringBootApp from './Java/SpringBootApp';
import { HtmlCssNode, JavaSpringNode } from './types';

export default class MetaProject {
  public readonly html_css_code: HtmlCssNode[]
  public readonly java_code: JavaSpringNode[]
  /* public readonly springboot_app: SpringBootApp */

  constructor(
    html_css_code: HtmlCssNode[],
    java_code: JavaSpringNode[]
  ){
    this.html_css_code= html_css_code
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

    const rest_api_process = (node: any, parentLayoutMode: any, parentNodeType: any) => ({
      id: node.id,
      name: node.name,
      node_type: node.type,
      text_content: node.characters,
      box: {
        width: node.absoluteBoundingBox.width,
        height: node.absoluteBoundingBox.height,
        parentLayoutMode: parentLayoutMode,
        parentNodeType: parentNodeType,
        layoutMode: node.layoutMode,
        layoutGrow: node.layoutGrow || 0,
        layoutAlign: node.layoutAlign || 'INHERIT',
        primaryAxisSizingMode: node.primaryAxisSizingMode,
        counterAxisSizingMode: node.counterAxisSizingMode,
        paddingLeft: node.paddingLeft || 0,
        paddingTop: node.paddingTop || 0,
        paddingRight: node.paddingRight || 0,
        paddingBottom: node.paddingBottom || 0,
      },
      layout: {
        x: node.absoluteBoundingBox.x,
        y: node.absoluteBoundingBox.y,

        layoutMode: node.layoutMode,
        primaryAxisAlignItems: node.primaryAxisAlignItems || "MIN",
        counterAxisAlignItems: node.counterAxisAlignItems || "MIN",
        itemSpacing: node.itemSpacing || 0,

        textAlignHorizontal: node.style?.textAlignHorizontal,
        textAlignVertical: node.style?.textAlignVertical,
        letterSpacingValue: node.style?.letterSpacing,
        letterSpacingUnit: "PIXEL",
      },
      design: {
        fills: node.fills,
        strokes: node.strokes,
        effects: node.effects,
        strokeWeight: node.strokeWeight,
        topLeftRadius: node.rectangleCornerRadii?.[0] || node.cornerRadius || 0, 
        topRightRadius: node.rectangleCornerRadii?.[1] || node.cornerRadius || 0,
        bottomRightRadius: node.rectangleCornerRadii?.[2] || node.cornerRadius || 0,
        bottomLeftRadius: node.rectangleCornerRadii?.[3] || node.cornerRadius || 0,
      },
      typography: {
        textCase: node.style?.textCase || "ORIGINAL",
        fontFamily: node.style?.fontFamily,
        fontStyle: "Regular",
        isItalic: false,
        fontSize: node.style?.fontSize,
        textDecoration: node.style?.textDecoration || "NONE",
        lineHeightValue: (
          node.style?.lineHeightUnit == "FONT_SIZE_%"
          ? node.style?.lineHeightPercentFontSize
          : node.style?.lineHeightUnit == "PIXELS"
          ? node.style?.lineHeightPx
          : undefined
        ),
        lineHeightUnit: (
          node.style?.lineHeightUnit == "FONT_SIZE_%"
          ? "PERCENT"
          : node.style?.lineHeightUnit == "PIXELS"
          ? "PIXELS"
          : "AUTO"
        ),
        paragraphIndent: node.style?.paragraphIndent || 0
      },
      children: (
        node.children ?
          node.children.map((child: any) => {
            return rest_api_process(child, node.layoutMode, node.type);
          }) : null 
      )
    })

    try {
      const response = await axios.get(url, { headers });
      let raw_ui_data: Object[] = response.data["document"]["children"].find((node: any) => node["type"] == "CANVAS")["children"]
      raw_ui_data = raw_ui_data.map(node => rest_api_process(node, undefined, "PAGE"))
      return raw_ui_data;
    } catch (error) {
        console.error('Error:', error);
    }
  }

  static async getMetaUiData(raw_ui_data: any) {
    try {
      const response = await axios.post('http://localhost:3003/figma',raw_ui_data);
      return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
  }

  static async getMetaUmlData(raw_uml_data: any) {
    try {
      const response = await axios.post('http://localhost:3004/lucid',raw_uml_data);
      return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
  }

  static async getHtmlCssCode(meta_ui_data: any) {
    try {
      const response = await axios.post('http://localhost:3005/project',meta_ui_data);
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

