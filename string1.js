
//Example 1 - Split string → find last word → find its length
//Input: "Hello World"
function lengthOfLastWord(str) {
    const words = str.split(" ");
    const lastWord = words[words.length - 1];
    const length = lastWord.length;

    console.log(`Last word: ${lastWord}`);
    console.log(`Length of last word: ${length}`);

    return length;
}

// Test
lengthOfLastWord("Hello World");

//Example 2 Trim → split → find last word → return length
//Input: " fly me to the moon "
function lengthOfLastWordAfterTrim(str) {
    const trimmedStr = str.trim();
    const words = trimmedStr.split(" ");
    const lastWord = words[words.length - 1];
    const length = lastWord.length;

    console.log(`Trimmed string: "${trimmedStr}"`);
    console.log(`Last word: ${lastWord}`);
    console.log(`Length of last word: ${length}`);

    return length;
}

// Test
lengthOfLastWordAfterTrim(" fly me to the moon ");

//Example 3 - Check if two strings are Anagrams
//Remove spaces, Convert to same case, Sort characters, Compare results
// Anagram - An anagram is a word formed by rearranging the letters of another word Example: listen → silent
function isAnagram(str1, str2) {
    const formattedStr1 = str1
        .replace(/\s/g, "")
        .toLowerCase()
        .split("")
        .sort()
        .join("");

    const formattedStr2 = str2
        .replace(/\s/g, "")
        .toLowerCase()
        .split("")
        .sort()
        .join("");

    return formattedStr1 === formattedStr2;
}

// Tests
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false


//Reverse String
function reverseString(text) {
    let reversed = "";

    for (let i = text.length - 1; i >= 0; i--) {
        reversed = reversed + text[i];
    }

    console.log(`Reversed string: ${reversed}`);
    return reversed;
}

// Test
reverseString("Rajesh");


//Palindrome Check - A palindrome is a word that reads the same forwards and backwards - Example: madam, level
function isPalindrome(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }

    return str === reversed;
}

// Tests
console.log(isPalindrome("madam"));  // true
console.log(isPalindrome("level"));  // true
console.log(isPalindrome("hello"));  // false

