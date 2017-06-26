var http = require("http");

var PORT1 = 7000;

var PORT2 = 7500;

function handleRequest1(request, response) {

 response.end("YOU ARE AWESOME!!");
}

function handleRequest2(request, response) {

 response.end("YOU STINK!!");
}
// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var server1 = http.createServer(handleRequest1)
var server2 = http.createServer(handleRequest2)

// Here we start our server so that it can begin listening to client requests.
server1.listen(PORT1, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORT);

});

server2.listen(PORT2, function() {
  console.log("Server listening on: http://localhost:%s", PORT2);
 
});
