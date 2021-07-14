// ANY TYPE
// nhận bất cứ kiểu dữ liệu gì như javaScript
// trong thực tế rất ít dùng any
let age:any=25
age ='huou'
age ={a:'b'}
age =[1,5]


let mixed:any[]=[]
mixed.push(5)
mixed.push(false)

let person:{name:any;age:any}

person={name:25,age:'huou'}