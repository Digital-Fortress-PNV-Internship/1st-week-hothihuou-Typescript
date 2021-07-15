// OPTIONAL AND NOT NULL
// OPTIONNAL tham số không bắt buộc
//b?a=b:a // kiểm tra có b ko? có =>a+bb
const add =(a:number, b?:number)=>b?a+b:a
    console.log(add(1,2))
    console.log(add(1))

    // b! : nonnull
const addNonnull=(a:number,b?:number)=>a +b!
console.log(addNonnull(3,4))
console.log(addNonnull(3))