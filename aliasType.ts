// TYPE ALIAS


type stringOrNumber = string|number

type student={
    name:string
    id:stringOrNumber

}// ko phải là object

const studentDetails =(id:stringOrNumber, studentName:string):void=>{
    console.log(`Student ${ studentName} has id: ${id}`)
}

studentDetails(123,'huou')
studentDetails('123','huou')

const greet =(user:student)=>{
    console.log(`${user.name} with id: ${user.id} says hello`)

}
greet({name:'hang',id:'1'})