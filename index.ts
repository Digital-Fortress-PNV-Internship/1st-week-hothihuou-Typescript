import { Invoice, payment } from "./classImplementsInterface";
import { HasPrint } from "./interfaceForClass";


const documentOne:HasPrint = new Invoice('hello','student',230000)
const documentTwo:HasPrint = new payment('hello','student',230000)
const allDocument:HasPrint[]=[]
allDocument.push(documentOne)
allDocument.push(documentTwo)
console.log(allDocument)