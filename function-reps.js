//Write a function that takes an arr of num's and finds the 2nd lowest and 2nd greatest numbers respectively. 

// input: an array  
ariTheArray = [23, 59, 102, 7, 13, 869, 35, 504]
//outpoots: 2 elemnts in an array [2nd highest and 2nd lowest num's]
//Expected output: [13, 504]

// Pseudo code: 
// create a function
// Add an arr param
// use .sort to put the numbers in ascending order 
// .sort by default puts string in alphabetical order so, we need to use a function to put them num's in order ((a, b) => a-b)
// iterate through Ari with .filter to get a subset of Ari
// return value where the index is === to 1 (2nd least)
// || return value is === to Ari.length -2

const ariSort = (array) => {
    let sortedAri = array.sort((a, b) => a-b)
    return sortedAri.filter((value, index) => index === 1 || index === array.length - 2 )