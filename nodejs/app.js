const express = require('express');
const app = express();
const port = 3000;

app.get('/node', function(req, res) {
    res.send('Connected');
});

app.listen(port, function() {
    console.log('Server listening on http://localhost:' + port);
});