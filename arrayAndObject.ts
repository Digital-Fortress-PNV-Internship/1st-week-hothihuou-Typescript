// ARRAY AND OBJECT
// ARRAY 
let names = ['mai', 'huou', 'hang'];
names.push('son'); // đúng, vì đúng kiểu dữ liệu string
// names.push(5)->sai
// names.push(false)->sai
let numbers = [1, 2, 3];
//numbers.push('huou')->sai kiểu sữ liệu
numbers.push(5);
numbers[4] = 8;
//console.log(numbers)
let mixed = [1, 'huou', false];
mixed.push(5); //->ok
mixed.push('huou'); //->ok
mixed[5] = true; //->ok
// console.log(mixed)
// OBJECT
let person = {
    name: 'huou',
    age: 20,
    isStudent: true
};
//person.name=5->sai
person.name = 'name';
// typeScript kiểm tra rất chặt chẽ
person.age = 21;
// không được khia báo thêm, thiếu các trường trong person 
person = {
    name: 'hang',
    age: 18,
    isStudent: true
};
console.log(person);
