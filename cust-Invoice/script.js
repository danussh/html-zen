var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Customer = /** @class */ (function () {
    function Customer(custData) {
        this.id = custData.id;
        this.discount = custData.discount;
        this.name = custData.name;
    }
    Customer.prototype.getID = function () {
        return this.id;
    };
    Customer.prototype.getName = function () {
        return this.name;
    };
    Customer.prototype.getDiscount = function () {
        return this.discount;
    };
    Customer.prototype.setDiscount = function (discount) {
        this.discount = discount;
    };
    Customer.prototype.toString = function (id, name, discount) {
        return "ID:" + id + ", Name:" + name + ", Discount:" + discount;
    };
    return Customer;
}());
var Invoice = /** @class */ (function (_super) {
    __extends(Invoice, _super);
    function Invoice(custInfo, invoiceInfo) {
        var _this = _super.call(this, custInfo) || this;
        _this.amount = invoiceInfo.amount;
        return _this;
    }
    Invoice.prototype.getAmount = function () {
        return this.amount;
    };
    Invoice.prototype.setAmount = function (amount) {
        this.amount = amount;
    };
    Invoice.prototype.getAmountAfterDiscount = function () {
        console.log("Discount given is: " + this.discount);
        var a = this.amount * this.discount;
        console.log("The discounted amount:" + a);
        return (this.amount - a);
    };
    return Invoice;
}(Customer));
var Account_cust = /** @class */ (function (_super) {
    __extends(Account_cust, _super);
    function Account_cust(custInfo, invoiceInfo, acctInfo) {
        var _this = _super.call(this, custInfo, invoiceInfo) || this;
        _this.balance = acctInfo.balance;
        return _this;
    }
    Account_cust.prototype.getBalance = function () {
        return this.balance;
    };
    Account_cust.prototype.setBalance = function (balance) {
        this.balance = balance;
    };
    Account_cust.prototype.deposit = function (amount) {
        console.log("Amount deposited is " + amount);
        this.balance += amount;
        return this.balance;
    };
    Account_cust.prototype.withdraw = function (amount) {
        if (amount < this.balance) {
            console.log("Amount withawed is " + amount);
            this.balance -= amount;
            return this.balance;
        }
        else {
            console.log('insufficient balance');
        }
    };
    return Account_cust;
}(Invoice));
var acct = new Account_cust({ id: 123,
    name: "danussh",
    discount: 0.5 }, {
    amount: 400
}, {
    balance: 6000
});
document.write("Id:" + acct.getID());
var br = document.createElement('br');
document.body.append(br);
document.write("Name:" + acct.getName());
var br1 = document.createElement('br');
document.body.append(br1);
document.write("Get balance" + acct.getBalance());
var br3 = document.createElement('br');
document.body.append(br3);
document.write("Get discount" + acct.getDiscount());
var br4 = document.createElement('br');
document.body.append(br4);
acct.setDiscount(0.2);
acct.setBalance(1000);
document.write("New Bal:" + acct.getBalance());
var br5 = document.createElement('br');
document.body.append(br5);
document.write("Current bal after deposit:" + acct.deposit(1000));
var br6 = document.createElement('br');
document.body.append(br6);
document.write("Current bal after withdrwal:" + acct.withdraw(500));
acct.setAmount(1000);
var br7 = document.createElement('br');
document.body.append(br7);
var c = acct.getAmountAfterDiscount();
document.write('Amount after discount:' + c);
var br9 = document.createElement('br');
document.body.append(br9);
document.write("Current bal after withdrwal:" + acct.withdraw(c));
var br10 = document.createElement('br');
document.body.append(br10);
document.write("Current bal after deposit :" + acct.deposit(acct.getAmount()));
var br11 = document.createElement('br');
document.body.append(br11);
