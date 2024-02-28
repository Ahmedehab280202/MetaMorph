import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;
import PersonRepository;
import Person;
@Service
public class PersonService {
    @Autowired
    private PersonRepository personRepository;
    public List<Person> getAllPersons() {
        return personRepository.findAll();
    }
    public Person getPersonById(Person id) {
        Optional<Person> result = personRepository.findById(id);
        return result.orElse(null);
    }
    public void createPerson(Person person) {
        personRepository.save(person);
    }
    public void updatePerson(Person id, Person person) {
        personRepository.save(person);
    }
    public void deletePerson(Person id) {
        personRepository.deleteById(id);
    }
 public void makeFriend(Person friend) {
 return Person friend }
}
