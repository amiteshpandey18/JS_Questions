class BankAccount {

    #balance = 1000; // Private variable declare using #

    deposite(amount) {
        this.#balance += amount;
    }
    getBalance() {
        return this.#balance;
    }
}

const acc = new BankAccount();

acc.deposite(200);
console.log(acc.getBalance());  // 1200
// console.log(acc.#balance); error(Private)