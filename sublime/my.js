// var http=require("http");
// http.createServer(function(request,response){
// 	response.writeHead(200,{'content-type':'text/plain'});
// 	response.end('new life is breathing now\n');

// }).listen(8081);
// console.log('Server running at http://127.0.0.1:8081/'+'\n waiting');

// console.log(__dirname);
// console.log(__filename);

// buf = new Buffer(256);
// len = buf.write("simply Easy Learning");
// console.log("Octets written :"+ len);

// const os=require('os');  
// console.log("os.freemem(): \n",os.freemem());  
// console.log("os.homedir(): \n",os.homedir());  
// console.log("os.hostname(): \n",os.hostname());  
// console.log("os.endianness(): \n",os.endianness());  
// console.log("os.loadavg(): \n",os.loadavg());  
// console.log("os.platform(): \n",os.platform());  
// console.log("os.release(): \n",os.release());  
// console.log("os.tmpdir(): \n",os.tmpdir());  
// console.log("os.totalmem(): \n",os.totalmem());  
// console.log("os.type(): \n",os.type());  
// console.log("os.uptime(): \n",os.uptime());  
// console.log("os.hostname():\n"+os.hostname());
// console.log("os.arch()"+os.arch());
//console.log(os.userinfo([User]));

// const os=require('os');
// //console.log("os.cpus(): \n"+os.cpus());

// setInterval(function(){
// console.log("hello");
// },1000);


// setTimeout(function(){
// console.log("your session is over");
// },1000);

// var recursive=function(){
// 	console.log("ha hi ");
// 	setTimeout(recursive,1000);
// }
// recursive();

function welcome(){
	console.log("welcome");
}
var id1=setTimeout(welcome,1000);
var id2=setInterval(welcome,1000);
clearTimeout(id1);


