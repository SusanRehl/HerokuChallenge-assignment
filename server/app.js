var http=require('http');
var express=require('express');
var app=express();
var path=require('path');

http.createServer(function(req, res) {
  console.log('hi from server');
  res.writeHead(200);
  res.write('hi folks from server response');
  res.write(responseFunction());
  res.end();
}).listen(3000);


var responseFunction = function(){
  return('from responseFunction');
};

app.get('/', function(req, res) {
  res.writeHead(200);
  res.write('hello world from the base url');
  res.end();
});

var server=app.listen(process.env.PORT || 3000, function() {
  console.log('hello world from port 3000');
});
