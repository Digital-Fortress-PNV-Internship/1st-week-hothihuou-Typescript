//EXPLICIT TYPE

let mynames:string
let ages:number
let isStudents:boolean

mynames='huou'

// myname =60// not ok kkkk

ages =20
//age ='huou

isStudents =false


// arrays

// let student:string[]=['huou','hang']

// // student.push(5)
// student.push('name')


let mixedd:(string|number|boolean)[]

mixedd=['huou',5,true,9] 
mixedd.push(5)
mixedd.push('hang')

mixedd.push(true)

//console.log('new Array: ');

// console.log(mixedd)

let id:(string|number)

id='123'
id=123


let hobby:'book'|'music'

hobby ='book'//->ok
// ok

// objects

let person:object
person ={name:'huou',age:20}
person =[]// = object = mảng cx đc

let student :{
    name:string,
    age:number,
    isGood:boolean
}

student={
    name:"huou",
    age:20,
    isGood:false
}