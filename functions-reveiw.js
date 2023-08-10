// Write a function named marco that returns "polo".

const marco = () => {
  return "Polo"
}


// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// puesdo code
// set a parameter of number
// determine whether number is odd or even using conditionals 
// use modulo to see if the number has remainder when divided by 2 
// if the number divided by 2 has no remainder it is even, otherwise it is odd.

const oddOrEven = (number) => {
  if(number % 2 === 0){
    return "even"
  } else {
    return "odd"
  }
} 

console.log(oddOrEven(53))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// psuedo code
// set parameters of string1 and string2
// determine which is longer using conditonal 
// use .length to see the number of charaters in the strings 


const isLonger = (str1, str2) => {
  if (str1.length > str2.length) {
    return `${str1} has more characters`
  } else if (str1.length === str2.length)  {
   return  "these string have the same amount of characters"
  } else {
    return `${str2} has more characters`
  } 
}

// console.log(isLonger("eleven", "eleven"))



// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

//psuedo code
// set a parameter of array
// iterate through the array (for loop)

officeHoursArr = [3, 5, 82, 100, 23]

const multByThree = (array) => {
 let newArray = []
  for(let i=0; i < array.length; i++){
    newArray.push(array[i] * 3)
  }
 return newArray
}

// console.log(multByThree(officeHoursArr)) // [ 9, 15, 246, 300, 69 ]

const multByThree2 = (array) => {
  return array.map(value => value * 3)
}

// console.log(multByThree2(officeHoursArr)) // [ 9, 15, 246, 300, 69 ]

// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.

// psuedo code
// input [1, "i", 2, "love", 3, "office", 4, "hours"]
// output "i love office hours"
const comboArr = [7,
  "n",
  true,
  "i",
  "c",
  10,
  "e",
  -388,
  "w",
  3,
  "o",
  0,
  "r",
  false,
  "k"
]
//iterate through the array using .filter bc we only want to return the stings (return a subset)
// use conditionals to determine if element is a string or a number use typeof because typeof will return the data type as a srting
  // if element's typeof is a string we want it to be returned
// convert filtered array into a string (.join())


const arrToStrg = (array) => {
  return array.filter(value => typeof value === "string").join("")
}

console.log(arrToStrg(comboArr)) // "nicework"



