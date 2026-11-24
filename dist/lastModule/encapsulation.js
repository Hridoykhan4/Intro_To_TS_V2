class BankAccount {
    userId;
    userName;
    _userBalance;
    constructor(userId, username, userBalance) {
        this.userName = username;
        this._userBalance = userBalance;
        this.userId = userId;
    }
    addBalance(balance) {
        this._userBalance = this._userBalance + balance;
    }
    callHiddenMethod(balance) {
        this.addBalance(balance);
    }
}
const myAccount = new BankAccount(191, 'qsdasd', 1);
myAccount.callHiddenMethod(29);
console.log(myAccount);
export {};
