// IT'S OFFICE HOURS, HOMIES!


// In tonight's function you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

//Example: 
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return: "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


// Psuedo Code
// ✅create a variable the holds the alphabet in a string 
// ✅make string lowercase (.toLowercase())
// ✅convert the string into an array (.split(""))
// iterate throught array (.map)
  // use a conditonal
    // if alphabet string includes (.includes()) value return the alphabet position 
    // else return null 
    // console.log() at this point will return: 
      // [9, 20, null, 19, null, 15, 6, 6, 9, 3, 5, null, 8, 15, 21, 18, 19, null, null, 8, 15, 13, 9,  5, 19, null]
// ✅filter through new array to return only the alphabet positions 
  // console.log() will return this: 
    // [9, 20, 19, 15, 6,  6,  9, 3, 5, 8, 15, 21, 18, 19, 8, 15, 13, 9, 5, 19]
// ✅ convert array to string (.join(" "))

const alphaBetty = (string) => {
  let alphArr = "abcdefghijklmnopqrstuvwxyz"
  return string.toLowerCase().split("").map(letter => {
    if (alphArr.includes(letter)) {
      return alphArr.indexOf(letter) + 1  // we added 1 because we want to return the position (essential what number element is the particular letter in the string) in the alphabet string and NOT the index
    } else {
      return null 
    }
  }).filter(value => value !== null).join(" ")
}

console.log(alphaBetty("It's Office Hours, Homies!")) 
// output:  9 20 19 15 6 6 9 3 5 8 15 21 18 19 8 15 13 9 5 19

