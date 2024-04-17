package com.meta.service;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;
import com.meta.repository.TaskRepository;
import com.meta.model.Task;
@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }
    public Task getTaskById(Integer id) {
        Optional<Task> result = taskRepository.findById(id);
        return result.orElse(null);
    }
    public void createTask(Task task) {
        taskRepository.save(task);
    }
    public Task updateTask(Integer id, Task task) {
try{    
Task taskFound = taskRepository .findById(id).orElse(null); 
if(taskFound == null) return null; 
        taskRepository.save(task);
return task;
    }
catch(Exception e){
return null;
} 
} 
    public void deleteTask(Integer id) {
        taskRepository.deleteById(id);
    }
}
