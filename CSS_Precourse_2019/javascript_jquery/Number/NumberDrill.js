//Thinkful Prep Course Number Drill
//LJZ
// Area Function 
function computeArea(width, height) {
    return width*height
  }
  
function celsToFahr(celsTemp) {
    return celsTemp*(9/5)+32
  }
  
function fahrToCels(fahrTemp) {
    return (fahrTemp-32)*(5/9)
  }

  function testConversion(fn, input, expected) {
    if (fn(input) === expected) {
      console.log('SUCCESS: `' + fn.name + '` is working');
      return true;
    } else {
      console.log('FAILURE: `' + fn.name + '` is not working');
      return false;
    }
  }  

 //isDivisiable function  
function isDivisible(divisee, divisor) {
  return (divisee%divisor)===0;
}


// Testing ComputeArea()  
function testComputeArea() {
  let width = 3;
  let height = 4;
  let expected = 12;
  if (computeArea(width, height) === expected) {
    console.log('SUCCESS: `computeArea` is working');
  } else {
    console.log('FAILURE: `computeArea` is not working');
  }
}

// Testing Temp Converters

function testConversion(fn, input, expected) {
    if (fn(input) === expected) {
      console.log('SUCCESS: `' + fn.name + '` is working');
      return true;
    } else {
      console.log('FAILURE: `' + fn.name + '` is not working');
      return false;
    }
  }
  
function testConverters() {
  let cel2FahrInput = 100;
  let cel2FahrExpect = 212;
  let fahr2CelInput = 32;
  let fahr2CelExpect = 0;
 
  if (
    testConversion(celsToFahr, cel2FahrInput, cel2FahrExpect) &&
    testConversion(fahrToCels, fahr2CelInput, fahr2CelExpect)
  ) {
    console.log('SUCCESS: All tests passing');
  } else {
    console.log('FAILURE: Some tests are failing');
  }
}

//Divisibility 
function testIsDivisible() {
    if (isDivisible(10, 2) && !isDivisible(11, 2)) {
      console.log('SUCCESS: `isDivisible` is working');
    } else {
      console.log('FAILURE: `isDivisible` is not working');
    }
  }

testComputeArea();  
testConverters();
testIsDivisible();