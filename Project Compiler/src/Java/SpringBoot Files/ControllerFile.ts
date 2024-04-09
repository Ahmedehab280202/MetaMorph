export default class ControllerFile {
  readonly file_name: string
  readonly content: string

  constructor() {
    this.file_name = `ToDoController.java`
    this.content = (
      `package com.meta.controller;\n`+
      '\n'+
      'import java.util.List;\n'+
      'import java.util.ArrayList;\n'+
      '\n'+
      'import org.springframework.stereotype.Controller;\n'+
      'import org.springframework.ui.Model;\n'+
      'import org.springframework.web.bind.annotation.GetMapping;\n'+
      'import org.springframework.web.bind.annotation.PostMapping;\n'+
      'import org.springframework.web.bind.annotation.RequestParam;\n'+
      '\n'+
      '@Controller\n'+
      `public class ToDoController {\n`+
      '\n'+
      '    private List<String> tasks = new ArrayList<>();\n'+
      `\n`+
      `    @PostMapping("/createTask")\n`+
      `    public String createTask(@RequestParam String Taskname) {\n`+
      `        tasks.add(Taskname);\n`+
      `        System.out.println("Task Name: " + Taskname);\n`+
      `        return "redirect:/";\n`+
      `    }`+
      '\n'+
      `    @GetMapping("/")\n`+
      `    public String index(Model model) {\n`+
      `        model.addAttribute("tasks", tasks);\n`+
      `        return "index";\n`+
      `    }\n`+
      `\n`+
      '}'
    )
  }
}