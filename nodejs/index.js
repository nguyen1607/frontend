const http = require('http');
const port = 3000;
var fs = require('fs');
var data = fs.readFileSync('text.txt');
console.log(data.toString());
var routes = {
    '/index': (req, res) => {
        res.writeHead(200);
        res.end('OK');
    },

    '/home': (req, res) => {
        res.writeHead(200);
        res.end('You\'re visiting HomePage');
    },
};


http.createServer((req, res) => {
    if (req.url in routes) {
        return routes[req.url](req, res);
    }
    res.writeHead(404);
    res.write('Not correct Request\n');
    res.end(http.STATUS_CODES[404]);
}).listen(port);
