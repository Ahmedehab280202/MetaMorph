
package com.meta.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PersonService {

    @Autowired
    private PersonRepository personRepository;

    public List<Person> getAllPersons() {
        List<Person> persons = new ArrayList<>();
        personRepository.findAll().forEach(persons::add);        
        return persons;
    }

    public Person getPerson(UUID id) {
        Optional<Person> optionalPerson = personRepository.findById(id);
        return optionalPerson.orElse(null);
    }

    public void addPerson(Person person) {
        personRepository.save(person);
    }

    public void updatePerson(UUID id, Person person) {
        personRepository.save(person);
    }

    public void deletePerson(UUID id) {
        personRepository.deleteById(id);
    }
}
