// id = 1, name = "John Doe"
// Tuples
let person: [number, string] = [1, "John Doe"]

person[1].toLocaleUpperCase()

//Enums Type

// let smallSize = 1;
// let mediumSize = 2;
// let largeSize = 3

// pascal case

enum Size { Small = 1, Medium, Large }

let mySize: Size = Size.Medium

console.log(mySize)