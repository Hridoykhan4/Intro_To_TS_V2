class BankAccount {
    public readonly userId: number;
    public userName: string;
    private _userBalance: number;

    constructor(userId: number, username: string, userBalance: number) {
        this.userName = username;
        this._userBalance = userBalance;
        this.userId = userId
    }

    private addBalance (balance: number)        {
        this._userBalance = this._userBalance + balance
    }

    callHiddenMethod (balance: number)      {
        this.addBalance(balance)
    }
}

const myAccount = new BankAccount(191, 'qsdasd', 1);
myAccount.callHiddenMethod(29)

console.log(myAccount);