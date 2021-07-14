// Function
// bình phương
// const square =(side:number)=>side*side
// console.log(square(3))



// let greet:Function
// greet = ()=>console.log('hello')
// greet()

// 


// const add =(a:number, b:number, c:number)=>a+b+c
// console.log(add(5,6,7))// đúng
// // console.log(add(5,6,'a'))// sai



// có thể khai báo vừa số vừa string
// nếu có c?:number|string: không bắt buộc phải truyền vào c
// const add =(a:number, b:number, c?:number|string)=>{
//     console.log(a+b)// đúng
//     console.log(c)
// }
// add(1,2,'huou')

// có giá trị mặc định cho tham số
// const addDefault =(a:number, b:number, c:number|string=10)=>{

//     console.log('sum',a+b)// đúng
//     console.log(c)
// }
// addDefault(1,2,9)

// khi khai báo number nếu muốn trả về đúng kết qua thì nên trả về number , 
const minus=(a:number, b:number):number=>a -b 


