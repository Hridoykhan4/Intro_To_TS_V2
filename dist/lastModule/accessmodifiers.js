class BankAccount {
    userId;
    userName;
    _userBalance;
    constructor(userId, userName, userBalance) {
        this.userId = userId;
        this.userName = userName;
        this._userBalance = userBalance;
    }
    addBalance(balance) {
        this._userBalance = this._userBalance + balance;
    }
}
class StudentBankAccount extends BankAccount {
    test() {
        return this._userBalance;
    }
}
const bank1 = new BankAccount(101, 'Jamal', 12);
const studentBalance = new StudentBankAccount(102, 'Salam', 4);
studentBalance.addBalance(8);
console.log(studentBalance.test());
export {};
// bank1.addBalance(12)
// console.log(bank1);
