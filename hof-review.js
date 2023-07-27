// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
const arr1 = [3, 9, 15, 4, 10]
// output: [30, 90, 150, 40, 100]

const multBy10 = (array) => {
  return array.map(number => number * 10) 
}
// console.log(multBy10(arr1))// [ 30, 90, 150, 40, 100 ]


// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
const array1 = [3, 9, 15, 4, 10]
// output: [1.5, 4.5, 7.5, 2, 5]

const divBy2 = (array) => {
  return array.map(number => number / 2)
}
// console.log(divBy2(array1))//[ 1.5, 4.5, 7.5, 2, 5 ]



// Create a function that takes in an array of numbers and returns an array with only odd numbers.
const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]
// output: [7, 3, 5, 13, -9]

const onlyOdd = (array) => {
  return array.filter(number => number % 2 !== 0)
}

// const multiplyByThree = arr2.map((value) => {
//   return value * 3
//  })

//  const multiplyByThree = (array) => {
//  return array.map((value) => {
//   return value * 3
//  })
//  }

 const multiplyByThree = (array) => {
  return array.map(value => value * 3)
  }

// console.log(onlyOdd(arr2)) // [ 7, 3, 5, 13, -9 ]
console.log(multiplyByThree(arr2))

// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.
const pumbaa = "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
// output: ["a", "wonderful", "ain't", "passing", "craze"]

// Pseudocode:
// set parameter of string
//convert string to array (.split())
// iterate through array (.filter)
// determine charact. amount (.length())

const oddWords = (string) => {
  return string.split(" ").filter(word => word.length % 2 !== 0)
}
// console.log(oddWords(pumbaa))

// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// output: "nicework"

// Pseudocode: 
// set a parameter of array ✅
// iterate through array (.filter)✅
// transform the array into a string (.join())
// determine dataType with typeof operator ✅

const lightWork = (array) => {
  return array.filter(element => typeof element === "string").join("") 
}

// console.log(lightWork(comboArr)) // nicework


// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]

// Pseudocode:
// set a parameter of array
// Iterate through the array (.map)
// determine that the value is NOT false, null, 0, or blank values (!==, &&)


const exclusiveArr1 = (array) => {
  return array.filter(value => {
    return value !== "" && value !== false && value !== null && value !== 0
  } )
}
// ------------------OR--------------------

const exclusiveArr = (array) => {
  return array.filter(value => value !== "" && value !== false && value !== null && value !== 0)
}

console.log(exclusiveArr1(filterArrayValues)) // [ 58, 'abcd', true ]

console.log(exclusiveArr(filterArrayValues)) // [ 58, 'abcd', true ]



// Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.
const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]
// // output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]

// Pseudocode: 
// set a parameter of string ✅
// iterate through the array (.map)✅
// on each iteration turn string to array (.split)✅
// iterate through each letter of our string the we converted to array✅
// determine the index of the letter with (ternary operator) ✅
    // The Syntax ---->   condition ? if true here : if false here
    // index of letter is odd ? (if true) Captialize letter : (if false) leave letter as is ✅
//convert array back to string ✅
   

    const wackyCaps1 = (array) => {
      return array.map(value => {
        return value.split("").map((letter, index) => {
          return index % 2 !== 0 ? letter.toUpperCase() : letter
        }).join("")
      })
    }

    // ---------------OR------------------

    const wackyCaps = (array) => {
      return array.map(value => value.split("").map((letter, index) => index % 2 !== 0 ? letter.toUpperCase() : letter).join(""))
    }

    console.log(wackyCaps1(makesWackyWords))

// Create a function that takes in a string and returns a new string with all the vowels removed.
const str = "javascript is awesome"
// // output: "jvscrpt s wsm"

// Pseudocode:
//set the parameter string ✅
// convert string to array (.split())✅
// determine if it's a vowel with a conditonal ✅
  // compare letter with an array of vowel that 
// convert back to arra (.join()) ✅

const consonantsOnly = (string) => {
  let vowelArr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  return string.split("").map(letter => {
    if (vowelArr.includes(letter)){
      return ""
    } else {
      return letter 
    }
  }).join("")
}

console.log(consonantsOnly(str))// jvscrpt s wsm

// Create a function that takes in a string containing numbers and returns an array with each number at its own index and converted to the data type of number.
const stringOfNumbers = "4574328"
// // output: [4, 5, 7, 4, 3, 2, 8]


// Pseudocode: 
// set a parameters 
// convert the string to an array (.split())
// iterate through array (.map)
// convert string to number (parseInt())


const stringToNum1 = (string) => {
  return string.split("").map(value => {
    return parseInt(value)})
}

// ------------------ OR --------------------
const stringToNum = (string) => {
  return string.split("").map(value => parseInt(value))
}
 
console.log(stringToNum(stringOfNumbers))
console.log(stringToNum1(stringOfNumbers))



// 🏔 Stretch Goals
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3]
// const arr2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]







// Create a function that takes in an array of mixed data types and returns the first value that is a string. HINT: look into the JavaScript .find() method.
// const allTheData = [7, null, true, 2, "yo!", false, 4, "hello!"]