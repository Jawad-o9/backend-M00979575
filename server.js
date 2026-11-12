var express = require("express");
var app = express();

app.use(function (request, response) {
    console.log("in comes a request to" + request.url);
    response.end("Hello, world!");
});

//starting the server

app.listen(3000, function () {
    console.log("App started on port 3000");
});