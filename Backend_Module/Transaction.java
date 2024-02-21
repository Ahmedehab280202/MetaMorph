class Transaction {
@Entity
@ID
@GeneratedValue
    public int transactionId = ;
    public double amount = ;
    public Date date = ;
 public int gettransactionId() {
 return transactionId }
 public void  settransactionId(int transactionId) {
this.transactionId = transactionId; }
 public double getamount() {
 return amount }
 public void  setamount(double amount) {
this.amount = amount; }
 public Date getdate() {
 return date }
 public void  setdate(Date date) {
this.date = date; }
}
