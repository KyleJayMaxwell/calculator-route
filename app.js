var http = require('http');
var logic = require('./logic');
var port = 5115;

var numbers = [];
var operator = [];
var answer = "";

var requestHandler = function (req, res){
  var route = req.url;
  var split = route.split("/");
  for(i=0;i<split.length; i++){
    if ( split[i].length === 1 ) {
      numbers.push(parseInt(split[i]));
    } else if ( split[i].length >= 4){
      operator.push(split[i]);
    }
  }
  res.setHeader('Content-Type', 'text/html');
  console.log("Numbers in the uri: "+numbers);
  console.log("Operation in the uri: "+ operator);
  
  logic(numbers[0], numbers[1], operator);
  // console.log('req: '+route);
  // console.log(res);
  //res.end('End stuff');
};

var server = http.createServer(requestHandler);

server.listen( port, function(){
  console.log('Server running on port: '+ port);
});


// function calculate (a, b, operationArr){
//   for (var i = 0; i < operationArr.length; i++) {
//     if(operationArr[i] === 'plus'){
//       console.log(a + b);
//     } else if (operationArr[i] === 'minus'){
//       console.log(a - b);
//     } else if (operationArr[i] === 'divide'){
//       console.log(a / b);
//     } else if (operationArr[i] === 'multiply'){
//       console.log(a * b);
//     } else {
//       console.log('You Broke it');
//     }
//   };
// }