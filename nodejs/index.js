const http = require('http');

var routers = {
    '/mode': (req, res) => {
        res.writeHead(200);
        res.end("<h1>Application</h1>");
    }
}

function index (req, res) {
    res.writeHead(200);
    res.end('Connected!');
};

http.createServer(function (req, res) {
    if (req.url === '/') {
        return index(req, res);
    }
    res.writeHead(404);
    res.end(http.STATUS_CODES[404]);
}).listen(3000);