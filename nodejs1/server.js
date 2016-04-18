/**
 * Created by zhaozhihui on 16/4/18.
 */
var http = require("http");
var url = require("url");

function start(route, handle) {
    http.createServer(function (request, response) {
        var pathName = url.parse(request.url).pathname;
        console.log("Request " + pathName + " received.");
        route(handle, pathName, response, request);
    }).listen(8888);

    console.log("Server has started!");
}

exports.start = start;
