/**
 * Created by xinpan on 05/01/2015.
 */

var events = require('events');

function Account() {

    this.balance = 0;
    events.EventEmitter.call(this);
    this.deposit = function (amount) {
        this.balance = this.balance + amount;
        this.emit('balanceChanged');
    };

    this.withdraw = function (amount) {
        this.balance = this.balance - amount;
        this.emit('balanceChanged');
    };

}

Account.prototype.__proto__ = events.EventEmitter.prototype;

function showBalance() {
    console.log("Account balance is: " + this.balance);
}

function checkOverdraw() {
    if (this.balance < 0) {
        console.log("Account overdraw");
    }
}

function checkGoal(acc, goal) {
    if (acc.balance > goal) {
        console.log("Goal archived");
    }
}

var account = new Account();
account.on('balanceChanged', showBalance);
account.on('balanceChanged', checkOverdraw);
account.on('balanceChanged', function () {
    checkGoal(account, 1000);
});

account.deposit(1000);
account.deposit(200);
account.withdraw(500);
account.withdraw(2000);

