
package com.meta.controller;
import org.springframework.web.bind.annotation.;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import com.meta.model.;
import com.meta.service.*;
    @RestController
    @RequestMapping("/Person")
    public class PersonController {
    @Autowired
    private PersonService PersonService;
    @GetMapping
    public List<Person> getAllPersons() {
        return PersonService.getAllPersons();
    }
    @GetMapping("/{id}")
    public Person getPersonById(@PathVariable Integer id) {
        return PersonService.getPersonById(id);
    }
    @PostMapping("/{add}")
    public void createPerson(@RequestBody Person Person) {
        PersonService.createPerson(Person);
    }
    @PutMapping("/{id}")
    public void updatePerson(@PathVariable Integer id, @RequestBody Person Person) {
        PersonService.updatePerson(id, this.class_name);Person
    }
    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Integer id) {
        PersonService.deletePerson(id);
    }
    