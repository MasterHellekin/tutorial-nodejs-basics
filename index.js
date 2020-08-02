const express = require('express');
const colors = require('colors')
const server = express();
server.listen(3000, function () {
    console.log("Servidor en puerto 3000".green);
});