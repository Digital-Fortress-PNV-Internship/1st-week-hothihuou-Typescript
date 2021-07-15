// Class

class Employee{
    // Cách 1
      // public name:string // có thể truy cập từ ngoài vào
      // private age:number //local chỉ nằm trong class, 0 thể thay đổi giá trị
      // readonly mail:boolean // Có thể truy cập từ ngoài vào.0 thể thay đổi giá trị
      
      // constructor(n:string,a:number,m:boolean){
      //     this.name =n
      //     this.age =a
      //     this.mail =m
      // }
      // // function 
    
  // CÁch 2
  //Hàm khởi tạo
      constructor(
          public name:string,
          private age:number,
          readonly mail:true
      )  {}
      
      //Khai báo một phương thức
        print(){
          return `Name:${this.name}, Age: ${this.age} , Mail:${this.mail}`
      }
  
  }
  //SỬ DỤNG LỚP

//Tạo một đối tượng từ lớp bằng new
  const huou = new Employee('huou',20,true)
  //truy cập thuộc tính đối tượng huou.name
    //  console.log(huou.name)//->ok
     // console.log(huou.age)-> ko đc vì private ko truy cập từ bên ngoài đc
    //  console.log(huou.mail)->ok, but not change value
  // console.log(huou)
  
  //gọi một phương thức của đối tượng
  //console.log(huou.print())
  
  const bob = new Employee('bob',25,true)
  
  // Dùng mảng để xem nhiều employee
  
  let employees:Employee[]=[]
  employees.push(huou)
  employees.push(bob)
  
  employees.forEach(haha=>
      console.log(haha.name,haha.mail,haha.print()))