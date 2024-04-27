
package com.meta.service;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;
import com.meta.repository.PersonRepository;
import com.meta.model.Person;
@Service
public class PersonService {
    @Autowired
    private PersonRepository PersonRepository;
    public List<Person> getAllPersons() {
        return PersonRepository.findAll();
    }
    public Person getPersonById(Integer id) {
        Optional < Person > result = PersonRepository.findById(id);
        return result.orElse(null);
    }
    public void createPerson(Person Person) {
        PersonRepository.save(Person);
    }
    public Person updatePerson(Integer id, Person Person) {
        try {
            Person PersonFound = PersonRepository.findById(id).orElse(null);
            if (PersonFound == null) return null;
            PersonRepository.save(Person);
            return Person;
        }
        catch (Exception e) {
            return null;
        }
    }
    public void deletePerson(Integer id) {
        PersonRepository.deleteById(id);
    }
}
    