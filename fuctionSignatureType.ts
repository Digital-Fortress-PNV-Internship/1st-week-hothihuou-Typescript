// FUCTION SIGNATURE
// trả về kiểu dữ liệu của anos
// let greet:Function 
// greet = () =>console.log('hello huou')


// let greet:(a:string, b:string)=>void // chữ kí
// {
//     greet = (name:string,greeting:string)=>// function
//     console.log(`${name} say ${greeting}`)
    
//     greet('huou','hello')
// }

let calculate:(a:number,b:number,c:string)=> number // chữ lí
calculate=(numberOne:number,numberTwo:number, action:String)=>// hàm
action==='add'? numberOne +numberTwo : numberOne -numberTwo
console.log(calculate(4,2,'minus'))



type Student ={name:string,age:number}

let printerStudent:(student:Student)=>void //chữ kí fuction
printerStudent = (mystudent:Student)=>{
console.log(`${mystudent.name} is ${mystudent.age} years old`)
}

printerStudent({name:'huou',age:20})

const nam={
    name:'nam',
    age:18
}
printerStudent(nam)
