## Challenge:analyze a most frequent word program

### Synopsis of the algorithm

student:LJZ

the function `mostFrequentWord()` takes in a parameter, text, which is a string datatype.
This function will scan through every word within the string and count up the number of each
word's frequency and finally return the word that has the highest frequency.

First, the algorithm calls the function `getTokens()` which cleans up the raw String. It changes
all words to its lowercase, and remove all punctuation with the string method `.split()`, then filters
out all "booleans" with the string method `.filter()`, and finally it uses `.sort()` to sort through all the word according to their length and returns the processed text string. It is then assigned to the variable `words`

Second, it builds an empty object named `wordFrequencies` and a for loop is used to loop through every single word within the `words` string. Every new word it encounters is added as `key` to the `wordFrequencies` object and assigned a value of 1 and if that word appears more than once, it respective value increases accordingly, (e.g: if the word "this" appears 4 times, then it will be like `this:4`).  

Finally, when the loop is completed a "word count object" is produced. Two new variables `currentMaxKey` and `currentMaxCount` are assigned to the first key and value of the object `wordFrequencies`. Then it starts another for loop to loop through every word in the object. If the next value is greater than the `currentMaxCount`, it updates the next key and value as the `currentMaxKey` and `currentMaxCount` until it finds the word with the highest frequency and return that word as the result of the algorithm.



```javascript
// getTokens() clean up the text string, and return a clean text string without punctuation and boolean
function getTokens(rawString) {
  // `.filter(Boolean)` removes any falsy items from an array
  return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}

// function to find the word that has the highest frequency.
function mostFrequentWord(text) {
  // call getTokens() function to clean up raw string.
  let words = getTokens(text);
  // make a new variable assigned to an empty object.
  let wordFrequencies = {};
  // for loop to scan through every word and turn them into key, then count their frequency and
  // add it as value to the key respectively. If the word appears only once, it will have an value of 1.
  for (let i = 0; i <= words.length; i++) {
    if (words[i] in wordFrequencies) {
      wordFrequencies[words[i]]++;
    } else {
      wordFrequencies[words[i]] = 1;
    }
  }
  // select the first key of the object, the first word in this case, as the max key, and its value as
  // max count.
  let currentMaxKey = Object.keys(wordFrequencies)[0];
  let currentMaxCount = wordFrequencies[currentMaxKey];
  // for loop to compare the current max key and max count to every key and value of the object, if the //// next object value is greater than the current max value, then it updates the next key and value as the /// current max key and value.
  for (let word in wordFrequencies) {
    if (wordFrequencies[word] > currentMaxCount) {
      currentMaxKey = word;
      currentMaxCount = wordFrequencies[word];
    }
  }
  // it return the max key, which is the word that appears the most
  return currentMaxKey;
}
```
