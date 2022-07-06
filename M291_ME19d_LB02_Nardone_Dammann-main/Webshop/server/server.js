/*
Multipurpose Server
 */

let express = require("express");
let app     = express();
const port = process.env.PORT || 3000;

const server = app.listen(port);
console.log(`Running at Port ${port}`);
server.timeout = 1000 * 60 * 2; // 2 minutes

//https://www.w3schools.com/nodejs/nodejs_filesystem.asp
const fs = require('fs');

//https://nodejs.org/api/path.html
const path = require('path');

//Warning: Korrekt setzen!!
const staticPath = './data/';


//Handle CORS Requests
const cors = require("cors");
let corsOptions = {
    origin: "http://localhost:8080"
};
app.use(cors(corsOptions));

app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

app.get('/test', (req, res) => {
    let fileLoc = path.resolve(staticPath+'test.txt');
    fs.readFile(fileLoc, 'utf8',
        (err, text) => {
            res.send(text);
    });
});

app.get('/v1/products', (req, res) => {
    let fileLoc = path.resolve(staticPath+'products-1.json');
    fs.readFile(fileLoc, 'utf8', (error, text) => {
        if (error) {
            console.error(`Fehler und hier die Fehlermeldung: ${error}`);
            res.send(`Ups, ein Fehler ist passiert! Benachrichtigen Sie den das Shop-Support-Team.`);
        } else {
            try {
                console.log(text);
                res.send(text);
            } catch (e) {
                console.error('Invalid JSON in file');
            }
        }
    });
});
