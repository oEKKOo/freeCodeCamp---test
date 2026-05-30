class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount <= 0) {
      return "Deposit amount must be greater than zero.";
    }
    this.transactions.push({ type: "deposit", amount: amount });
    this.balance += amount;
    return `Successfully deposited $${amount}. New balance: $${this.balance}`;
  }

  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) {
      return "Insufficient balance or invalid amount.";
    }
    this.transactions.push({ type: "withdraw", amount: amount });
    this.balance -= amount;
    return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const deposits = this.transactions
      .filter(item => item.type === "deposit")
      .map(item => item.amount);
    return `Deposits: ${deposits.join(",")}`;
  }

  listAllWithdrawals() {
    const withdrawals = this.transactions
      .filter(item => item.type === "withdraw")
      .map(item => item.amount);
    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}

// 创建账户实例并完成交易（满足：至少5笔交易、2存2取、余额>100）
const myAccount = new BankAccount();
myAccount.deposit(200);   // 存款1
myAccount.deposit(150);   // 存款2
myAccount.withdraw(80);   // 取款1
myAccount.withdraw(60);   // 取款2
myAccount.deposit(30);    // 存款3（总交易5笔）