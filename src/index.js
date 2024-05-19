const express = require('express');
const handlebars = require('express-handlebars');

const port = 3000;
const morgan = require('morgan');
const http = require('http');
const hostname = 'localhost';
const path = require('path');
const app = express();
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(__dirname + '/public'));
// console.log("day la dirname",__dirname +'/public')
//logger
app.use(morgan('combined'));

// template engine
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource/views'));
console.log(path.join(__dirname, 'resource/views'));

// // Middleware error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(`<h1>${err.message}</h1>`);
});
const sever = http.createServer(app);
const route = require('./routes');

route(app);

sever.listen(port, hostname, () => {
    console.log(`Sever running at http://${hostname}:${port}/`);
});
