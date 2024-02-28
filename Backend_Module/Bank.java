import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;
import BankRepository;
import Bank;
@Service
public class BankService {
    @Autowired
    private BankRepository bankRepository;
    public List<Bank> getAllBanks() {
        return bankRepository.findAll();
    }
    public Bank getBankById(Bank id) {
        Optional<Bank> result = bankRepository.findById(id);
        return result.orElse(null);
    }
    public void createBank(Bank bank) {
        bankRepository.save(bank);
    }
    public void updateBank(Bank id, Bank bank) {
        bankRepository.save(bank);
    }
    public void deleteBank(Bank id) {
        bankRepository.deleteById(id);
    }
 public String calculateDebt(int amount) {
 return int amount }
}
