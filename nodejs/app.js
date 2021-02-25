const express = require('express');
const async = require('async');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Connected');
});

app.listen(port, () => {
    console.log('Server listening on http://localhost:' + port);
});

function shortTimeFunction(callback) {
    setTimeout(() => {
        callback(null, 'resultShort');
    }, 200);
};

function mediumTimeFunction(callback) {
    setTimeout(() => {
        callback(null, 'result')
    },500);
};

async.parallel ({short: shortTimeFunction, medium: mediumTimeFunction},
    (err, results) => {
        if(err) {
            return console.error(err);
        };
        console.log(results);
    });
