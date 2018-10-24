// var server=require('http');
// server.createServer(engine).listen(1337);
// function engine(request,response){

// response.writeHead(200,{'content-type':'text-plain'});
// response.end('i am ready to server');
// console.log('its running');
// }

var server=require('http');
server.createServer(engine).listen(1337);
function engine(request,response){
	console.log(response);
}