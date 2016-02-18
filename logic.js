module.exports = function calculate (a, b, operationArr){
    switch(operationArr[0]){
      case 'plus':
        answer = a + b
        break;
      case 'minus':
        answer = a - b
        break;
      case 'divide':
        answer = a / b
        break;
      case 'multiply':
        answer = a * b
        break;
      default:
        answer = "Fucking Broken"
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
    console.log("Answer: "+answer);
}