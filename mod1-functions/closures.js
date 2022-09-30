/* Напишите функцию counter(), которая при каждом вызове возвращает число на единицу большее предыдушего  */

const counter = ( (i = 1) => () => i++)()

console.log( counter() ); //1
console.log( counter() ); //2
console.log( counter() ); //3
