import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;
import TransactionRepository;
import Transaction;
@Service
public class TransactionService {
    @Autowired
    private TransactionRepository transactionRepository;
    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }
    public Transaction getTransactionById(Transaction id) {
        Optional<Transaction> result = transactionRepository.findById(id);
        return result.orElse(null);
    }
    public void createTransaction(Transaction transaction) {
        transactionRepository.save(transaction);
    }
    public void updateTransaction(Transaction id, Transaction transaction) {
        transactionRepository.save(transaction);
    }
    public void deleteTransaction(Transaction id) {
        transactionRepository.deleteById(id);
    }
 public boolean processTransaction() {
 return  }
}
