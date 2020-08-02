const http = require('http');
const colors = require('colors');

const handleServer = function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write("<h1>Hola perro</h1>");
    res.end();
}

const server = http.createServer(handleServer);
server.listen(3000, function () {
    console.log("Servidor en puerto 3000".green);
});