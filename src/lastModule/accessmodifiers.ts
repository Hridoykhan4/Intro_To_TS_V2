class BankAccount {
    public readonly userId: number;
    public userName: string;
    protected _userBalance: number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this._userBalance = userBalance
    }

     addBalance(balance: number) {
        this._userBalance = this._userBalance + balance;
    }
}


class StudentBankAccount extends BankAccount {
    test() : number {
        return this._userBalance
    }
}


const bank1 = new BankAccount(101, 'Jamal', 12);
const studentBalance = new StudentBankAccount(102, 'Salam', 4)
studentBalance.addBalance(8)
console.log(studentBalance.test());
// bank1.addBalance(12)
// console.log(bank1);