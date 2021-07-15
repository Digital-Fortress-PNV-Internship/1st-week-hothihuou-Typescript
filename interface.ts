//Không giống class, interface là một cấu trúc ảo chỉ tồn tại trong TypeScript. 
//TypeScript dùng interface với mục đích chủ yếu là kiểm tra kiểu.

interface Person {
    name:string
    age:number
    speak(lang:string):void
    spend(amount:number):number
}

const huouu:Person={
    name:'huou',
    age:30,
    // khai báo phương thức
    speak(text:string):void{
        console.log(text)
    },
    spend(amt:number):number{
        return amt
    }

    
}

// console.log(huouu)

const helloPerson = (onePerson:Person)=>
console.log(`hello ${onePerson.name}`)
// gọi lại hàm
helloPerson(huouu)