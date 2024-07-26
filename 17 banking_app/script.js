/*
17. Build a banking application
A banking application needs to manage customer accounts and transactions. The user detail is stored in an
object with a keys name and balance. Write functions using object methods to update a customer's account
balance based on a deposit or withdrawal.
*/

const user = {
    name: 'John',
    balance: 5000,
    deposit: function(amount) {
        this.balance += amount;
        return `Deposit of ${amount} successful. New balance is ${this.balance}`;
    },
    withdraw: function(amount) {
        if (amount > this.balance) {
            return 'Insufficient funds';
        }
        this.balance -= amount;
        return `Withdrawal of ${amount} successful. New balance is ${this.balance}`;
    }
};