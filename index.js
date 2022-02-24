function isPalindrome(word) {
  // Write your algorithm here
  let length = word.length


  for(let i = 0; i < Math.floor(length/2); i++){
    if(word[i] !== word[length - 1 - i]){
      console.log('false')
      return false
    }
  }
  console.log('true')
  return true
}

isPalindrome('mom');

console.log("");
/* 
  Add your pseudocode here
  1. declare length
  2. for()
  3. if()
  4. return true/false

*/

/*
  Add written explanation of your solution here
    Add written explanation of your solution here
  My 'isPalindrome' function will take a word/string as its parameter,
  First step, establish value for word/string length for loop
  Next, use for loop to loop and compare word/string
  if it's true, it will console.log 'true' and return true,
  if it's false, it will console.log 'false' and return false,
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
