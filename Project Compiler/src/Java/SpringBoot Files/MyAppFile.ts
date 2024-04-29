export default class MyAppFile {
  readonly file_name: string
  readonly content: string

  constructor(app_name: string) {
    this.file_name = `${app_name}.java`
    this.content = (
      `package com.meta;\n`+
      '\n'+
      'import org.springframework.boot.SpringApplication;\n'+
      'import org.springframework.boot.autoconfigure.SpringBootApplication;\n'+
      '\n'+
      '@SpringBootApplication\n'+
      `public class  ${app_name}{\n`+
      '\n'+
      '    public static void main(String[] args) {\n'+
      `        SpringApplication.run(${app_name}.class, args);\n`+
      '    }\n'+
      '}'
    )
  }
}