package com.meta.controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import com.meta.model.*;
import com.meta.service.*;
@RestController
@RequestMapping("/task")
public class TaskController {
    @Autowired
    private TaskService taskService;
    @GetMapping
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }
    @GetMapping("/{id}")
    public Task getTaskById(@PathVariable Integer id) {
        return taskService.getTaskById(id);
    }
    @PostMapping("/{add}")
    public void createTask(@RequestBody Task task) {
        taskService.createTask(task);
    }
    @PutMapping("/{id}")
    public void updateTask(@PathVariable Integer id, @RequestBody Task task) {
        taskService.updateTask(id, task);
    }
    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Integer id) {
        taskService.deleteTask(id);
    }
}
