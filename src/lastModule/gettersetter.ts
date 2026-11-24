class BankAccount {
  public readonly userId: number;
  public userName: string;
  private _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }


//   addBalance (amount: number) {
//     this._userBalance = this._userBalance + amount
//   }


set addBalance(balance: number) {
    this._userBalance = this._userBalance + balance
}


get userBalance() : number {
  return this._userBalance
}

}

const mezbaAccount = new BankAccount(101, 'Jamal', 20)
mezbaAccount.addBalance = 23;
console.log(mezbaAccount.userBalance);