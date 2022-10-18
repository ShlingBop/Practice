function gooseFilter(birds){
  let geese =  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(bird => !geese.includes(bird))
}

//console.log(gooseFilter((["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])))

/*For every good kata idea there seem to be quite a few bad ones!
In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'. */

const well = x => {
  let goodCount = 0
  for(let i = 0; i<x.length; i++) {
    if(x[i] === 'good') {
      goodCount++
    } 
  }

  if(goodCount === 1 || goodCount === 2) {
    return 'Publish!'
  } else if(goodCount > 2) {
    return 'I smell a series!'
  } else {
    return 'Fail'
  }
  
}
//console.log(well(['good','good']))


function firstNonConsecutive (arr) { 
  for(i=0;i<arr.length-1;i++) { 
    if(arr[i] + 1 !== arr[i + 1]) { 
    return arr[i + 1] 
  } 
} 
  return null 
}

//console.log(firstNonConsecutive([1,2,3,4,5,6,7,8]))

function positiveSum(arr) {
  return arr.filter(num=>num>00).reduce((acc, c)=>acc+c, 0)
  }

//console.log(positiveSum([1,-4,7,12]))

function squareOrSquareRoot(array) { return array.map(e=>  Math.sqrt(e) % 1 === 0 ? Math.sqrt(e) : (e*e))}


//console.log(squareOrSquareRoot([4,3,9,7,2,1]))

function sumArr(nums) {
  return nums.reduce((acc,cur)=>acc+cur, 0)
}

//console.log(sumArr([42,19,77,33,57]))

function squareArr(arr) {
  return arr.map(e=>e**2)
}

//console.log(squareArr([1,2,3,4,5,6,7,8]))

const checkCharacters = (a, b) => {
  if  (a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()) { 
    return -1 
  } else if (a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b == b.toUpperCase()) { 
    return 1 
  } 
    else { 
      return 0 
    }
}

function findMultiples(integer, limit) {
  //your code here
  let result = []
  for(let i = integer; i<=limit; i+=integer)
    result.push(i)
  return result;
}

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    // your code here
    let volume = length * width * height
    return volume
  }
}

function strCount(str, letter){  
  //code here
  let count = 0;
  for(let i=0; i < str.length; i++){
    if(str[i] === letter)
      count++;
    }
    return count
  }