
package com.meta.person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
public class PersonController {
    @Autowired
    private PersonService personService;

    @GetMapping("/person")
    public List<Person> getAllPersons() {
        return personService.getAllPersons();
    }
    
    @GetMapping("/person/{id}")
    public Person getPerson(@PathVariable UUID id) {
        return personService.getPerson(id);
    }

    @PostMapping("/person")
    public void addPerson(@RequestBody Person person) {
        personService.addPerson(person);
    }

    @PutMapping("/person/{id}")
    public void updatePerson(@RequestBody Person person, @PathVariable UUID id) {
        personService.updatePerson(id, person);
    }

    @DeleteMapping("/person/{id}")
    public void deletePerson(@PathVariable UUID id) {
        personService.deletePerson(id);
    }
}
