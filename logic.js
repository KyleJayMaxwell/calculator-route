module.exports = function calculate (a, b, operationArr){
  for (var i = 0; i < operationArr.length; i++) {
    switch(operationArr[i]){
      case 'plus':
        console.log(a + b)
        break;
      case 'minus':
        console.log(a - b)
        break;
      case 'divide':
        console.log(a / b)
        break;
      case 'multiply':
        console.log(a * b)
        break;
      default:
        console.log("Fucking Broken");
    }
    // if(operationArr[i] === 'plus'){
    //   console.log(a + b);
    // } else if (operationArr[i] === 'minus'){
    //   console.log(a - b);
    // } else if (operationArr[i] === 'divide'){
    //   console.log(a / b);
    // } else if (operationArr[i] === 'multiply'){
    //   console.log(a * b);
    // } else {
    //   console.log('You Broke it');
    // }
  };
}