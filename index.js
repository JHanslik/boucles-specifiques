// 01 - Map Double

// const array = [1, 2, 3, 4, 5]

// const doubles = array.map ((number) => {
//     return number * 2 
// })

// console.log (doubles)


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 02 - Map Names

// const longNames = [
//     {
//         firstName: "Jane",
//         lastName: "Doe"
//     },
//     {
//         firstName: "John",
//         lastName: "Smith" 
//     }
// ]

// const shortNames = longNames.map ((fullNames) => {
//     return {name: `${fullNames.firstName} ${fullNames.lastName}`}
// })

// console.log (longNames)
// console.log (shortNames)


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 03 - Filter Numbers

// const array = [1, "toto", 34, "javascript", 8]


// const numbers = array.filter ((number, i) => {
//     return typeof number === "number"
// })

// console.log (numbers)


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 04 - Filter Even

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// const evens = numbers.filter ((even) => {
//     return even % 2 === 0
// })

// console.log (evens)


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 05 - Cakes

// const cakes = [
// 	{
// 		name: "cake",
// 		flavor: "vanilla",
// 		status: "available"
// 	},
// 	{
// 		name: "brownie",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// 	{
// 		name: "pie",
// 		flavor: "strawberry",
// 		status: "available"
// 	},
// 	{
// 		name: "muffin",
// 		flavor: "pistachio",
// 		status: "available"
// 	},
// 	{
// 		name: "donut",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// ]

// const chocCakes = cakes.filter ((chocCake) => {
//     return chocCake.flavor === "chocolate"
// })
    
// const soldOut = chocCakes.map ((cake) => {
//     return {name: cake.name, flavor: cake.flavor, status: "sold out !"}
// })

// console.log (soldOut)


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 06 - Cake v2

// const cakes = [
// 	{
// 		name: "cake",
// 		flavor: "vanilla",
// 		status: "available"
// 	},
// 	{
// 		name: "brownie",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// 	{
// 		name: "pie",
// 		flavor: "strawberry",
// 		status: "available"
// 	},
// 	{
// 		name: "muffin",
// 		flavor: "pistachio",
// 		status: "available"
// 	},
// 	{
// 		name: "donut",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// ]

// const pie = cakes.find ((cake) => {
//     return cake.name === "pie"
// })

// console.log (pie)


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 07 - Factorielle forEach

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let result = 1

// numbers.forEach ((number, i) => {
//     result *= number 
// })

// console.log (result)


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 08 - Chess board 

const lines = [1, 2, 3, 4, 5, 6, 7, 8]
let column
lines.forEach ((number, i) => {
    column = ``
    lines.forEach ((lines, j) => {
        if ((number + lines) % 2 === 0) {
            column += "[ ]"
        } else {
            column += "[X]"
        }
    })
    console.log (column)
})


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 09 - Filter

// const array = [12, ,55, "hello", {isStudent: false}, 3]

// const numbers = array.filter ((number, i) => {
//     return number = typeof number === "number"
// })

// console.log (numbers)