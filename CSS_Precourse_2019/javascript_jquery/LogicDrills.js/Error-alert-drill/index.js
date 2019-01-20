// 01/20/2019
// LJZ


// Error Alert
// Main function 
function main() {
    // try running doAllTheThings(),it throws an error. 
    // then 'catch' it. console.error write the error message
    // to console, then reportError() is called and error message
    // is printed with string literal method. 
    try{
    doAllTheThings();}
    catch(error){
        console.error(error);
        reportError(error);
    }
  
  }
    // doAllTheThings() throws an error object. 
  function doAllTheThings() {
    throw {
      message: "Everything's ruined",
      name: "FatalException",
      toString: function() {
        return `${this.name}: ${this.message}`;
      }
    }
  }
  
  // function handler print the error message with string literal method. 
  function reportError(e) {
    $('.js-error-report').text(`Uh oh, something went wrong! Here's what we know: ${e.message}`);
  }
  
  // call main()
  $(main);