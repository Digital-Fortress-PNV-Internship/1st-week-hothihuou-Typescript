import { HasPrint } from "./interfaceForClass";

// thực thi hàm hasPrint 
export class Invoice implements HasPrint{
    constructor(
        readonly client:string,
        private work:string,
        public amount:number
    ){}

    print(){
        return `${this.client} owe ${this.amount} dollars for this work:${this.work}`
    }
}

export class payment implements HasPrint{
    constructor(
        readonly recipiente:string,
        private job:string,
        public amt:number
    ){}

    print(){
        return ` I owe ${this.recipiente}  ${this.amt} dollars for this work:${this.job}`
    }
}