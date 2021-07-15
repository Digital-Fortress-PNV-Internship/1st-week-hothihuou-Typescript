"use strict";
exports.__esModule = true;
exports.payment = exports.Invoice = void 0;
// thực thi hàm hasPrint 
var Invoice = /** @class */ (function () {
    function Invoice(client, work, amount) {
        this.client = client;
        this.work = work;
        this.amount = amount;
    }
    Invoice.prototype.print = function () {
        return this.client + " owe " + this.amount + " dollars for this work:" + this.work;
    };
    return Invoice;
}());
exports.Invoice = Invoice;
var payment = /** @class */ (function () {
    function payment(recipiente, job, amt) {
        this.recipiente = recipiente;
        this.job = job;
        this.amt = amt;
    }
    payment.prototype.print = function () {
        return " I owe " + this.recipiente + "  " + this.amt + " dollars for this work:" + this.job;
    };
    return payment;
}());
exports.payment = payment;
