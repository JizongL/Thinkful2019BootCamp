
//01/18/2019 Thinkful Javascript String Drill 
//JLZ

// wisePerson function 
function wisePerson(wiseType, whatToSay) {
    return `A wise ${wiseType} once said: "${whatToSay}".`;
};

//shouter function   
function shouter(whatToShout) {
  // your code here
  return `${whatToShout.toUpperCase()}!!!`
}

//textNormalizer function 
function textNormalizer(text) {
    return text.toLowerCase().trim();
}


// test WisePerson()
function testWisePerson() {
  const wiseType = 'goat';
  const whatToSay = 'hello world';
  const expected = 'A wise ' + wiseType + ' once said: "' + whatToSay + '".';
  const actual = wisePerson(wiseType, whatToSay);
  if (expected === actual) {
    console.log('SUCCESS: `wisePerson` is working');
  } else {
    console.log('FAILURE: `wisePerson` is not working');
  }
}

// test Shouter()
function testShouter() {
    const whatToShout = 'fee figh foe fum';
    const expected = 'FEE FIGH FOE FUM!!!';
    if (shouter(whatToShout) === expected) {
      console.log('SUCCESS: `shouter` is working');
    } else {
      console.log('FAILURE: `shouter` is not working');
    }
  }

// test TextNormalizer()
function testTextNormalizer() {
  const text = "   let's GO SURFING NOW everyone is learning how   ";
  const expected = "let's go surfing now everyone is learning how";
  if (textNormalizer(text) === expected) {
    console.log('SUCCESS: `textNormalizer` is working');
  } else {
    console.log('FAILURE: `textNormalizer` is not working');
  }
}  
// call all the test functions. 
testWisePerson();  
testShouter();
testTextNormalizer();
  


