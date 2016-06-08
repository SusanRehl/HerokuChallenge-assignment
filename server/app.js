var http=require('http');

http.createServer(function(req, res) {
  console.log('hi from server');
  res.writeHead(200);
  res.write('hi folks from server response');
  res.write(responseFunction());
  res.end();
}).listen(3000);

console.log('hello world on port 3000');

var responseFunction = function(){
  return('from responseFunction');
};
