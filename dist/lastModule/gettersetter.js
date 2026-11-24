class BankAccount {
    userId;
    userName;
    _userBalance;
    constructor(userId, userName, userBalance) {
        this.userId = userId;
        this.userName = userName;
        this._userBalance = userBalance;
    }
    //   addBalance (amount: number) {
    //     this._userBalance = this._userBalance + amount
    //   }
    set addBalance(balance) {
        this._userBalance = this._userBalance + balance;
    }
    get userBalance() {
        return this._userBalance;
    }
}
const mezbaAccount = new BankAccount(101, 'Jamal', 20);
mezbaAccount.addBalance = 23;
console.log(mezbaAccount.userBalance);
export {};
