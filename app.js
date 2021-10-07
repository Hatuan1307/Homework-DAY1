//EX1:
console.log("EX1:");
function rot13(str) {
	let newStr = "";
	let regex = /[A-Z]/;
	let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	
  for(let i = 0; i < str.length; i++) {
  	if(str[i].match(regex)) { 
    	let index = alphabet.indexOf(str[i]); 
      let newIndex = index + 13; 
      if(newIndex > 26) { 
      	newIndex = newIndex - 26; 
        newStr += alphabet[newIndex]; 
      }
      else if(newIndex == 26) { 
      	newStr += alphabet[0];
      }
      else {
      	newStr += alphabet[newIndex];
      }
    }
  	else { 
    	newStr += str[i];
    }
  }
  console.log(newStr);
}
rot13("PUNEVMNEQ");
//EX2:
console.log("EX2:");
const str = 'abcdabcd'

const nearest = (arr = [], el) => arr.reduce((acc, val) => Math.min(acc,
Math.abs(val - el)), Infinity);
const vowelNearestDistance = (str = '') => {
   const s = str.toLowerCase();
   const vowelIndex = [];
   for(let i = 0; i < s.length; i++){
      if(s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' ||
      s[i] === 'u'){
         vowelIndex.push(i);
      };
   };
   return s.split('').map((el, ind) => nearest(vowelIndex, ind));
};
console.log(vowelNearestDistance(str));
//EX3:
console.log("EX3:");
function translatePigLatin(str) {
    var firstVowel = str.match(/[aeiou]/)
    console.log(firstVowel)
    var firstVowelPosition = str.indexOf(firstVowel)

    if (firstVowelPosition > 0) {
        return str.slice(firstVowelPosition) + str.slice(0, firstVowelPosition) + "ay";
    }
    else if (firstVowel === null) {
        return str + "ay"
    } else {
        return str + "way"
    }
}
console.log(translatePigLatin("schwartz"));
