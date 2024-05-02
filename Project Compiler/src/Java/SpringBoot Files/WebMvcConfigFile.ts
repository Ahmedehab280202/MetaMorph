export default class WebMvcConfigFile {
  readonly file_name: string
  readonly content: string

  constructor() {
    this.file_name = `WebMvcConfig.java`
    this.content = [
      `package com.meta;`,
      ``,
      `import org.springframework.context.annotation.Configuration;`,
      `import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;`,
      `import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;`,
      ``,
      `@Configuration`,
      `public class WebMvcConfig implements WebMvcConfigurer {`,
      `    @Override`,
      `    public void addResourceHandlers(ResourceHandlerRegistry registry) {`,
      `        registry.addResourceHandler("/static/**")`,
      `                .addResourceLocations("classpath:/static/");`,
      `    }`,
      `}`
    ].join('\n')
  }
}