"use strict";
exports.__esModule = true;
var classImplementsInterface_1 = require("./classImplementsInterface");
var documentOne = new classImplementsInterface_1.Invoice('hello', 'student', 230000);
var documentTwo = new classImplementsInterface_1.payment('hello', 'student', 230000);
var allDocument = [];
allDocument.push(documentOne);
allDocument.push(documentTwo);
console.log(allDocument);
