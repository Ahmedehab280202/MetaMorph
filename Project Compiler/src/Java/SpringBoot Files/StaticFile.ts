import { HtmlCssNode } from "../../types"

export default class StaticFile {
  readonly file_name: string
  readonly css: string
  readonly html: string
  readonly content: string

  constructor(code_node: HtmlCssNode) {
    this.file_name = `${code_node.name}.html`
    this.html = code_node.html
    this.css = code_node.css
    this.content = (
      `<!DOCTYPE html>\n`+
      `<html lang="en">\n`+
      `<head>\n`+
      `  <meta charset="UTF-8">\n`+
      `  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n`+
      `  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n`+
      `  <title>Document</title>\n`+
      `\n`+
      `  <style>\n`+
      `    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');\n`+
      `\n`+
      `    * {\n`+
      `        box-sizing: border-box;\n`+
      `        margin: 0px;\n`+
      `    }\n`+
      `\n`+
      `${this.css}\n`+
      `  </style>\n`+
      `</head>\n`+
      `<body>\n`+
      `\n`+
      `<!-- Dynamic Generation -->\n`+
      `${this.html}\n`+
      `<!-- Dynamic Generation -->\n`+
      `</body>\n`+
      `</html>`
    )
  }
}