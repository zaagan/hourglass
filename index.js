const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

let fullPath = path.join(__dirname + '/demo/plain/index.html');
console.log(`Source Path: ${fullPath}`);

console.log(`Browse: http://localhost:${port}`);

app.use(express.static(path.join(__dirname, '/demo/plain')));


app.get('/', function(req, res) {
    res.sendFile(fullPath);
});

app.listen(port);